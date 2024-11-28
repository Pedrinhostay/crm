import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI!;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Conectado ao MongoDB Atlas com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;