const maxId = (mass) => {
  return !!mass.length ? Math.max.apply(null, mass.map(task => task.id)) : 0;
}

export default maxId;
