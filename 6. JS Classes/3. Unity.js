class Rat
{
    constructor(name)
    {
        this.name=name;
      this.unitedWith = [];
    }

    unite(otherRat)
    {
        if(otherRat instanceof Rat)
        this.unitedWith.push(otherRat);
    }

    getRats()
    {
        return this.unitedWith;
    }

    toString()
    {
        console.log(this.name);
        for (let i = 0; i < this.unitedWith.length; i++) {
            console.log(`##${this.unitedWith[i].name}`);
        }
    }


}