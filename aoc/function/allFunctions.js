const days2015 = {
    year2015day1: require('./2015/1').year2015day1,
    year2015day2: require('./2015/2').year2015day2,
    year2015day3: require('./2015/3').year2015day3,
    year2015day4: require('./2015/4').year2015day4,
    year2015day5: require('./2015/5').year2015day5,
    year2015day6: require('./2015/6').year2015day6,
    year2015day7: require('./2015/7').year2015day7,
    year2015day8: require('./2015/8').year2015day8,
    year2015day9: require('./2015/9').year2015day9,
    year2015day10: require('./2015/10').year2015day10,
    year2015day11: require('./2015/11').year2015day11,
    year2015day12: require('./2015/12').year2015day12,
};

const days2022 = {
    year2022day1: require('./2022/1').year2022day1,
};

module.exports = { ...days2015, ...days2022};