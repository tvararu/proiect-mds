if (Ships.find().count() === 0) {
  Ships.insert({ 'position': { 'x': 0, 'y': 0, 'z': 0 } });
}