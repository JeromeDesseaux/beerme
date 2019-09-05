import React, {useState, useEffect} from "react";
import Card from "./Card";
import axios from "axios";
import "./Index.css"


// export default class IndexPage extends React.Component {
//     const [data, setData] = useState({ hits: [] });

//     render() {

//     }
// }

export default function IndexPage() {

    const [data, setData] = useState({ beers: [] });
    const [name, setName] = useState("");

    const handleChange = (name) => {
        setName(name.toLowerCase());
    }

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6',
          );
          setData({beers: result.data});
        };
        fetchData();
      }, []);

      return (
                <div className="flex-container">
                    <h1 className="mainHeader">BeerMe</h1>
                    <input type="text" name="beer" placeholder="Qu'est-ce qu'on boit aujourd'hui ?" className="input" value={name} onChange={e => handleChange(e.target.value)} />
                {data.beers.map(item => {
                    if(item.name.toLowerCase().includes(name)){
                        return (
                            <Card key={item.id} beerName={item.name} beerImage={item.image_url} beerDescription={item.description} />
                        );
                    }
                })}
                </div>
      );

}