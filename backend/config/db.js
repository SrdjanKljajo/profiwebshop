import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`Baza podataka MongoDB konektovana: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Greška: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB