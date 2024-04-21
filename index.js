
'use strict'

function Ladder(){
    this.carrentStep = 0;
}


function LadderProto(){
    
    this.up = function up(){
        debugger;
        ++this.carrentStep;
        return this;
    }
    this.down = function down(){
       --this.carrentStep;
       return this;
    }

    this.showStep = function showStep(){
        return this.carrentStep;
    }
}


Ladder.prototype = new LadderProto();
