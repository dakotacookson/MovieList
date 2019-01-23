const moviecontainer = document.createElement("h3")
moviecontainer.setAttribute("id" , "hello")
moviecontainer.textContent = "Movies"
const moviecontainer2 = document.createElement("hr")
const container = document.getElementById("container")
container.append(moviecontainer)
container.append(moviecontainer2)

const array = document.createElement("h2")


// const arraycontent = ["Watchman ","Big hero 6" , "Epic"]
const arraycontent = [{
   Name: "Watchman",
   Release_Date: 1988,
   link: "https://www.imdb.com/title/tt7049682/?ref_=nv_sr_8"
},
 {
     Name: "Big hero 6",
     Release_Date: "2016",
     link: "https://www.imdb.com/title/tt2245084/?ref_=fn_al_tt_1"

 },
{
Name: "Epic",
Release_Date: "2010",
link: "https://www.imdb.com/title/tt0848537/?ref_=fn_al_tt_1"

}
]


    const BIGcontainer1 = document.createElement("p")

arraycontent.forEach(singilearray => {
  console.log(singilearray) 
  const BIGcontainer1 = document.createElement("p")
  const BIGcontainer2 = document.createElement("p")
  const BIGcontainer4 = document.createElement("a")
  BIGcontainer4.setAttribute('href', singilearray.link)
  BIGcontainer4.textContent= "Click Me For Details"
  const BIGcontainer5 = document.createElement("hr")
  container.append(BIGcontainer1)
  container.append(BIGcontainer2)
  container.append(BIGcontainer4)
  container.append(BIGcontainer5)
    BIGcontainer1.append("Movie Name: " + singilearray.Name)
    BIGcontainer2.append("Relase Date: " + singilearray.Release_Date)
});
console.log(moviecontainer.innerText)
