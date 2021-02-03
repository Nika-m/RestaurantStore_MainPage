const products = [{
    id: 1,
    title:"ხინკალი ქალაქური",
    amount:"10",
    description:"",
    price:"12.00",
    image:"./images/products/1.jpg"
},
{
    id: 2,
    title:"ხინკალი მოხევური",
    amount:"10",
    description:"",
    price:"13.00",
    image:"./images/products/2.jpg"
},
{
    id: 3,
    title:"ხინკალი ყველით",
    amount:"10",
    description:"",
    price:"13.00",
    image:"./images/products/3.jpg"
},
{
    id: 4,
    title:"ხბოს მწვადი",
    amount:"",
    description:"კიტრი პომიდვრის სალათი ნიგვზით, ცეზარი ქათმით, ბადრიჯანი ნიგვზით, მჟავის ასორტი, ნადუღი სულგუნის ფირფიტებში, ყველი სულგუნი, შემწვარი ორაგული ბაჟეში, ხორცის ასორტი, წიწილა შემწვარი აჯიკით, ხბოს ჩაშუშული, კომბოსტოს ტოლმა, იმერული კუპატი, ხბოს მწვადი, ღორის მწვადი, კარტოფილი შემწვარი ტაფაზე, ხაჭაპური",
    price:"19.00",
    image:"./images/products/4.jpg"
}
];

const images = [
    {
        id:1,
    path:"./images/gallery/1.jpg"
    },
    {
        id:2,
        path:"./images/gallery/2.jpg"
    },
    {
        id:3,
        path:"./images/gallery/3.jpg"
    },
    {
        id:4,
        path:"./images/gallery/4.jpg"
    },
    {
        id:5,
        path:"./images/gallery/5.jpg"
    },
    {
        id:6,
        path:"./images/gallery/6.jpg"
    }
]

const categories = ["ცომეული", "ბოსტნეული", "შმოსტნეული", "სალათები", "ქაბაბები", "მწვადები","ცომეული", "ბოსტნეული", "შმოსტნეული", "სალათები", "ქაბაბები", "მწვადები"]


const locations = [
    {
        id:1,
        image:"./images/locations/1.jpg",
        title:"ლუდის მოედანი",
        address:"ბელიაშვილის ქუჩა 99, თბილისი",
        workingHours:"10:00 - 18:30",
        phone:"+995577503305"
    },
    {
        id:2,
        image:"./images/locations/2.jpg",
        title:"წისქვილი წყნეთში",
        address:"წყნეთი, რუსთაველის 10ა",
        workingHours:"10:00 - 18:30",
        phone:"+995577024715"
    },
    {
        id:3,
        image:"./images/locations/1.jpg",
        title:"ლუდის მოედანი",
        address:"ბელიაშვილის ქუჩა 99, თბილისი",
        workingHours:"10:00 - 18:30",
        phone:"+995577503305"
    },
    {
        id:4,
        image:"./images/locations/2.jpg",
        title:"წისქვილი წყნეთში",
        address:"წყნეთი, რუსთაველის 10ა",
        workingHours:"10:00 - 18:30",
        phone:"+995577024715"
    }

]

export default products;
export {images, locations, categories}