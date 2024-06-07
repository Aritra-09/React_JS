import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Go to api/products")
})

app.get("/api/products", (req, res) => {
    const products = [
        {
          name: "iPhone 14",
          type: "Smartphone",
          brand: "Apple",
          price: 999
        },
        {
          name: "Galaxy S21",
          type: "Smartphone",
          brand: "Samsung",
          price: 799
        },
        {
          name: "XPS 13",
          type: "Laptop",
          brand: "Dell",
          price: 1200
        },
        {
          name: "MacBook Air",
          type: "Laptop",
          brand: "Apple",
          price: 999
        },
        {
          name: "Surface Pro 7",
          type: "Tablet",
          brand: "Microsoft",
          price: 750
        },
        {
          name: "Pixel 6",
          type: "Smartphone",
          brand: "Google",
          price: 699
        },
        {
          name: "Yoga 9i",
          type: "Laptop",
          brand: "Lenovo",
          price: 1400
        },
        {
          name: "iPad Pro",
          type: "Tablet",
          brand: "Apple",
          price: 1099
        },
        {
          name: "Galaxy Tab S7",
          type: "Tablet",
          brand: "Samsung",
          price: 649
        },
        {
          name: "ThinkPad X1",
          type: "Laptop",
          brand: "Lenovo",
          price: 1600
        }
      ];
      

      if(req.query.search){
        const filterProducts = products.filter((product) => product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
      }


      setTimeout(() => {
        res.send(products)
      }, 3000);

})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})