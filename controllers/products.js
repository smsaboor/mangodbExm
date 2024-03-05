const Product = require("../models/products")

const getAllProducts = async (req, res) => {

  const {company, name, sort, select} = req.query
  const queryObject = {}
  let apiData = Product.find(queryObject);
  if(company){
    queryObject.company = company
    console.log(queryObject);
  }
  if(name){
    queryObject.name = {$reqex: name, $options: "i"}
    console.log(queryObject);
  }
  if(sort){
    // let sortfix = sort.replace(",", " ")
    let sortfix = sort.split(",").join(" ")
    apiData = apiData.sort(sortfix)
    // queryObject.sort = sortfix
  }
  if(select){
    // let selectfix = select.replace(",", " ")
    let selectfix = select.split(",").join(" ")
    apiData = apiData.select(selectfix)
    // queryObject.select = selectfix
  }
 
  let page = Number(req.query.page) || 1
  let limit = Number(req.query.limit) || 3
  let skip = (page - 1) * limit
  apiData = apiData.skip(skip).limit(limit)
  
  const myData = await apiData
  
  console.log("query is ", req.query);
  res.status(200).json({myData, nbHits: myData.length});
} 

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({msg: "I am geting all Products Testing"});
}

module.exports = {getAllProducts, getAllProductsTesting}
