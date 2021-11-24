
export class Department {
    private role:string;

    constructor(r:string){
        this.role=r;
    }

    getRole(){
        return (this.role);
    }

    setRole(r:string){
        this.role=r;
    }

}