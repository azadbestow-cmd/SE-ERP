import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// 1. Health Check
app.get('/health', (req, res) => {
  res.send('Server is healthy and running!');
});

// 2. Visitor Registration
app.post('/api/visitors/ocr', async (req, res) => {
  try {
    const { name, cnic, purpose, qrCode } = req.body;
    const visitor = await prisma.visitor.create({
      data: { name, cnic, purpose, qrCode }
    });
    res.json(visitor);
  } catch (error) {
    res.status(500).json({ error: "Failed to register visitor" });
  }
});

// 3. Service Ticket Creation
app.post('/api/service/ticket', async (req, res) => {
  try {
    const { machineId, description } = req.body;
    const ticket = await prisma.serviceTicket.create({
      data: { machineId, description, status: "Open" }
    });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Failed to create ticket" });
  }
});

// 4. QR Scan Lookup
app.get('/api/machine/qr/:serial', async (req, res) => {
  try {
    const { serial } = req.params;
    const machine = await prisma.machine.findUnique({
      where: { serial },
      include: { tickets: true }
    });
    if (!machine) return res.status(404).json({ error: "Machine not found" });
    res.json(machine);
  } catch (error) {
    res.status(500).json({ error: "QR Scan failed" });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});