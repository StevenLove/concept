import React, { Component } from 'react';
import Concept from "./Concept"
// import Concepts from '../Configuration/concepts.js'

class ConceptList extends Component {

    naturalOrdering = [
        "object","person","reality","fictional",
        "female","male","young","old",
        "work","recreation","slow","fast",
        "wildlife","flora","defense","conflict",
        "literature","music","life","death",
        "theater","arts","joyous","sad",
        "television","title","electronics","mechanical",
        "idea","expression",'money','time',
        'location','building','religion','power',
        'date','holidays','science','medical',
        'watercraft','airbornevehicle','head','arm',
        'landvehicle','tools','torso','leg',
        'games','clothing','ear','nose',
        'food','home','eye','mouth',
        'cloud','lightning','straightline','curve',
        'night','sun','cross','brokenline',
        'fire','water','spiral','sinusoidal',
        'air','earth','ring','circle',
        'rock','wood','triangle','star',
        'metal','fabric','rectangle','flat',
        'plastic','paper','cube','sphere',
        'opposed','break','pyramid','cylinder',
        'fragment','part','cone','hollow',
        'inside','grid','tall','small',
        'zero','unity','huge','skinny',
        'top','low','left','right',
        'red','orange','pink','brown',
        'yellow','green','black','gray',
        'blue','purple','white','clear',
        'turn','use'
    ];




    render() {
        let concepts = this.naturalOrdering.map((name,index)=>{ 
            return <Concept key={index} name={name} main = "" selectFn={this.props.selectFn}></Concept>
        })
        return (
            <div className="conceptListContainer" >
                {concepts}
            </div>
        );
    }
}

export default ConceptList;
