const collection = [];

const addRemove = {
  existingTasks: () => collection,
  addTask: (taskDescription) => {
    const data = {
      description: taskDescription,
      completed: false,
      index: collection.length + 1,
    };
    if (data.description !== '') {
      collection.push(data);
    }
  },
 
  
module.exports = { collection, addRemove };