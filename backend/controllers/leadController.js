import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
    try {
        const { name, phone, address, plan, addons, total } = req.body;

        // Validate required fields
        if (!name || !phone || !address || !plan || total === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newLead = new Lead({
            name,
            phone,
            address,
            plan,
            addons,
            total,
        });

        await newLead.save();

        res.status(201).json({ message: "Lead created successfully", lead: newLead });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.status(200).json({ leads: leads, total: leads.length});

  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Error fetching leads",
    });
  }
};