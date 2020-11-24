import axios from "axios";

 export  const params = {
  
  
    count: '5',
    originalImg: 'true',
    safeSearch: 'Off',
    category: 'Covid-19',
    headlineCount: '5',
    textFormat: 'Raw',
  
  
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': '31b11f32f1msh5a99100012b53dap1c7ea4jsn6f953f541eb1',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
  
};

export default axios.request({
    baseURL:'https://bing-news-search1.p.rapidapi.com/news'
});


