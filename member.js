function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 25,
    skills: ['JavaScript', 'React', 'Node', 'MongoDB'],
    getSkills: function() {
      return this.skills;
    }
  };

  return member;
}