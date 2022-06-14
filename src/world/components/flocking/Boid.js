import {Vector3} from 'https://cdn.skypack.dev/three@0.141.0';


class Boid{
    constructor(){
        this.mass = 1;
        this.position = new Vector3(0,0,0);
        this.velocity = new Vector3(0,0,0);

        this.separateDistance = 1;
        this.cohesionDistance = 4;
    }

    setRndPosition(){
        
    }

    addForce(){

    }

    separation(boids){
        let force = new Vector3();
        for(var j=0; j<this.boids.length; j++){
            let p2 = this.boids[j];
            if (p1.position.distanceTo(p2.position) < this.sensitiveRange){
                let towardTo = p1.position.sub(p2.position);
                force.add(towardTo);
            }
        }
        return force;
    }

    alignment(){
        let force = new Vector3();
        for(var j=0; j<this.boids.length; j++){
            let p2 = this.boids[j];
            if (p1.position.distanceTo(p2.position) < this.sensitiveRange){
                let towardTo = p1.position.sub(p2.position);
                force.add(towardTo);
            }
        }
        return force;
    }

    cohesion(){

    }


    update(){

    }

}

export{
    Boid
}