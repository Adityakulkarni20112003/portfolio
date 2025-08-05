import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification
      try {
        const transporter = createTransporter();
        
        const mailOptions = {
          from: process.env.EMAIL_USER || 'your-email@gmail.com',
          to: process.env.CONTACT_EMAIL || 'aditya@example.com',
          subject: `New Portfolio Contact: ${validatedData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `
        };
        
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the entire request if email fails
      }
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(process.cwd(), 'public', 'resume', 'Aditya_D_Kulkarni_Resume.pdf');
    if (fs.existsSync(resumePath)) {
      res.download(resumePath);
    } else {
      res.status(404).json({ 
        error: "Resume file not found",
        message: "Please upload your resume file to the public/resume directory" 
      });
    }
  });

  // Serve static files from the public directory
  app.use(express.static(path.join(process.cwd(), 'public')));

  const httpServer = createServer(app);
  return httpServer;
}
