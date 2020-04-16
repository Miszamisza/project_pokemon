class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.types[0].type.name;
    this.stat1Name = data.stats[0].stat.name;
    this.stat1Value = data.stats[0].base_stat;

    this.stat2Name = data.stats[1].stat.name;
    this.stat2Value = data.stats[1].base_stat;

    this.stat3Name = data.stats[2].stat.name;
    this.stat3Value = data.stats[2].base_stat;

    this.stat4Name = data.stats[3].stat.name;
    this.stat4Value = data.stats[3].base_stat;

    this.stat5Name = data.stats[4].stat.name;
    this.stat5Value = data.stats[4].base_stat;
  }
}

export default Pokemon;
