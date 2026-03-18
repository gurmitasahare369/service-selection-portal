import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, match: /^[0-9]{10}$/ },
    address: { type: String, required: true },
    plan: { type: String, required: true },
    addons: { type: [String], default: []},
    total: { type: Number, required: true}
}, { timestamps: true });

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;