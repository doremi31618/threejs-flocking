import {Boid} from './Boid.js';
import {Vector3} from 'https://cdn.skypack.dev/three@0.141.0';


class Boids{
    constructor(number){
        this.boids = [];
        this.sensitiveRange = 1;
        this.separationScaler = 1;
        this.cohesionScaler = 1;
        this.alignmentScaler = 1;
    }

    separation(){
        for(var i=0; i<this.boids.length; i++){
            let p1 = this.boids[i];
            for(var j=0; j<this.boids.length; j++){
                let p2 = this.boids[j];
                if (p1.position.distanceTo(p2.position) < this.sensitiveRange){
                    let towardTo = p1.position.sub(p2.position);
                    
                }
            }
        }
    }

    alignment(){

    }

    cohesion(){

    }

    update(){

    }
}

export{
    Boids,
}