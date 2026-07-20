import { connect ,ConnectOptions } from "mongoose";

export const dbConnect = () => {
  const source = "mongodb+srv://dbUser:7BK5GP3XlEKgKM4r@cluster0.b1tyda0.mongodb.net/foodmine?retryWrites=true&w=majority&appName=Cluster0";
    connect(source!,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("Connect Successfully"),
        (error) => console.log(error)
    )
}