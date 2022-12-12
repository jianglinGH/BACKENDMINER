interface Miners {
    angle: number,
    carryCapacity: number, 
    minerals: number, 
    miningSpeed: number, 
    name: string,  
    planet: string,   
    status: number, 
    target: string,   
    targetType: string,  
    travelSpeed: number,  
    x: number,   
    y: number, 
    __v: number,   
    _id: number
}

interface Asteroids {
    currentMiner: any,
    minerals: number,
    name: string,
    position: {x: number, y: number},
    status: number,
    _v: number,
    _id: string
}
interface Planets{
    minerals: number,
    name: string,
    miners: number,
    position: {x: number, y: number},
    __v: number 
}

export type {Miners, Asteroids, Planets}