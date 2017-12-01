import { Mongo } from 'meteor/mongo'; 

Meteor.methods({
    //do not use arrow function because it would break the this.userId assigned to it
    //allows anonymous bins
    'bins.insert': function () {
        return Bins.insert({
            //defaults
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            //inside of all meteor methods, the currently logged in user can be accessing using this.userId 
            ownerId: this.userId
        });
    },

    'bins.remove': function (bin) {
        return Bins.remove(bin);
    }

});

export const Bins = new Mongo.Collection('bins');