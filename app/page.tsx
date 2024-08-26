// "use client"
import fs from "fs";
import path from "path";
export default function page() {
  const filePath = path.join(process.cwd(), "./app/products/product.txt");
  const data = fs.writeFileSync(filePath,"hello world", "utf8");
  // console.log("file duoc doc voi noi dung",data);
  
  return (
  <div>page</div>
  )
}