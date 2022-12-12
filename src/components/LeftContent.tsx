import { useEffect, useState } from 'react';
import {apiPath} from '../common/api'
import {Miners,Asteroids,Planets} from '../type/interface'
import {TableType} from '../common/config'


function LeftContent() {  
    const [rows, setRows] = useState([]);
    const [activeType, setActiveType]:any = useState('miners');
    const [tableHead, setTableHead] = useState(['Name', 'Planet', 'carryCapacity', 'travelSpeed', 'miningSpeed', 'Position', 'Status']);
    const [tableHeight, setTableHeight] = useState(0);
    
    function setType(type: 'miners' | 'asteroids' | 'planets'){
        setActiveType(type);
    }

    function dealRows(type: 'miners' | 'asteroids' | 'planets', result:any){
        let rows;
        if(type === 'miners') {
            rows = result.map((ele:Miners) => {
                return {
                    name: ele.name,
                    planet: ele.planet,
                    carryCapacity: ele.carryCapacity + '/200',
                    travelSpeed: ele.travelSpeed,
                    miningSpeed: ele.miningSpeed,
                    position: parseInt(String(ele.x)) + ',' + parseInt(String(ele.y)),
                    status: ele.status,
                    id: ele._id
                }
            }) 
        }
        if(type === 'asteroids') {
            rows = result.map((ele:Asteroids) => {
                return {
                    name: ele.name,
                    minerals: ele.minerals,
                    currentMiner: ele.currentMiner,
                    position: ele.position.x + ',' + ele.position.y,
                }
            }) 
        }
        if(type === 'planets') {
            rows = result.map((ele:Planets) => {
                return {
                    name: ele.name,
                    miners: ele.miners,
                    minerals: ele.minerals,
                }
            }) 
        }
        return rows;
    }

    useEffect(() => {
        fetch(apiPath('/' + activeType)).then(res => res.text())
        .then(res => {
            let result = JSON.parse(res); 
            setTableHeight(45 + result.length * 40);
            setRows(dealRows(activeType, result)); 
          
        })

        switch(activeType) {
            case 'miners': setTableHead(['Name', 'Planet', 'carryCapacity', 'travelSpeed', 'miningSpeed', 'Position', 'Status']); break;
            case 'asteroids': setTableHead(['Name', 'Minerals', 'Current miner', 'Position']); break;
            case 'planets': setTableHead(['Name', 'Miners', 'Minerals', '']); break;
        } 
    }, [activeType])
  

    return(<div className='left-content'>
        <div className='type-list'>
            {TableType.map((ele:any) => {
                return (<div className='type-item' key={ele.key} onClick={() => {setType(ele.key)}}>
                <img alt='' className="type-img" src={activeType === ele.key ? require('../img/' + ele.key + 'Active.png') : require('../img/' + ele.key + '.png')}/> 
                <p>{ele.name}</p>
            </div>)
            })} 
        </div>
        <div className='split-line'></div>
        <div className='game-table-block'> 
            <table className='game-table' style={{minHeight: tableHeight + 'px'}}>
                <thead>
                    <tr>
                        {
                            tableHead.map(ele => {
                                return (
                                    <th key={ele}>{ele}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        activeType === 'miners' && rows.map((ele: any) => {
                            return <tr key={ele.id}>
                                <th className='first-column' key='1'>{ele.name}</th>
                                <th key='2'>{ele.planet}</th>
                                <th key='3'>{ele.carryCapacity}</th>
                                <th key='4'>{ele.travelSpeed}</th>
                                <th key='5'>{ele.miningSpeed}</th>
                                <th key='6'>{ele.status}</th>
                            </tr> 
                        })
                    }
                   {
                        activeType === 'asteroids' && rows.map((ele: any) => {
                            return <tr key={ele.id}>
                                <th key='1' className='first-column'>{ele.name}</th>
                                <th key='2'>{ele.minerals}</th>
                                <th key='3'>{ele.currentMiner}</th>
                                <th key='4'>{ele.position}</th> 
                            </tr> 
                        })
                    }
                   {
                        activeType === 'planets' && rows.map((ele: any) => {
                            return <tr key={ele.id}>
                                <th key='1' className='first-column'>{ele.name}</th>
                                <th key='2'>{ele.miners}</th>
                                <th key='3'>{ele.minerals}</th>
                                <th key='4'>Create a miner</th>
                            </tr> 
                        })
                    }
                  
                </tbody>
            </table>
        </div>
    </div>)
}

export {LeftContent}