const back_backflip = 10;
const front_backflip = 10;
const back_frontflip = 15;
const front_frontflip = 15;

const back_cody = 6;
const front_cody = 16;

const back_kbm = 3;
const front_kbm = 14;

const front_ballout = 0;
const back_ballout = 10;

const front_benny = 3;
const back_benny = 18;

const back_pullover = 3;
const front_pullover = 20;

const front_zach = 14;
const back_zach = 20;

const backflip_maintenance = 1;
const kbm_maintenance = 7;
const cody_maintenance = 6;
const pullover_maintenance = 4;
const frontflip_maintenance = 4;
const ballout_maintenance = 2;
const benny_maintenance = 10;
const zach_maintenance = 10;

const back_landed = 4;
const front_landed = 7;
const front_back = -2;
const front_notlandedorback = 0;
const back_stomach = 2;
const back_knees = 0;
const back_notstumorlanded = 0;

let combo = {
  trick1: {
    flips: 4.5,
    twists: 0,
    transition: back_cody,
  },
  trick2: {
    flips: 2.5,
    twists: 3,
    transition: back_kbm,
    maintenance: cody_maintenance,
  },
  trick3: {
    flips: 2.5,
    twists: 1,
    transition: back_cody,
    maintenance: cody_maintenance,
  },
  trick4: {
    flips: 1.25,
    twists: 1,
    transition: back_backflip,
    maintenance: kbm_maintenance,
  },
  trick5: {
    flips: 2,
    twists: 2,
    transition: back_landed,
    maintenance: backflip_maintenance,
  },
};

function getTrickScore(flips, twists) {
  const score = 3 * Math.pow(flips, 2) + 2 * Math.pow(twists + 0.2 * flips, 2);
  return score;
}

function getTransitionScore(flips, twists, transitionType) {
  const score =
    0.1 *
    transitionType *
    (3 * Math.pow(flips, 2) + 2 * Math.pow(twists + 0.2 * flips, 2));

  return score;
}

function getMaintenanceScore(flips, twists, maintenance) {
  const score =
    0.05 *
    maintenance *
    (3 * Math.pow(flips, 2) + 2 * Math.pow(twists + 0.2 * flips, 2));

  return score;
}

const main = (combo) => {
  let totalScore = 0;
  let totalTransitionScore = 0;
  let totalTrickScore = 0;
  let totalMaintenanceScore = 0;

  let totalMaintenance = 0;

  const keys = Object.keys(combo);

  keys.forEach((trick, index) => {
    const flips = combo[trick].flips;
    const twists = combo[trick].twists;
    const transition = combo[trick].transition;
    const maintenance = combo[trick].maintenance || 0;
    totalMaintenance += maintenance;

    const trickScore = getTrickScore(flips, twists);
    const transitionScore = getTransitionScore(flips, twists, transition);
    const maintenanceScore = getMaintenanceScore(
      flips,
      twists,
      totalMaintenance
    );

    totalTransitionScore += transitionScore;
    totalTrickScore += trickScore;
    totalMaintenanceScore += maintenanceScore;

    totalScore += trickScore;
    totalScore += transitionScore;
    totalScore += maintenanceScore;
  });

  console.log(`total score: ${totalScore}`);
  console.log(`total transition score: ${totalTransitionScore}`);
  console.log(`total maintenance score: ${totalMaintenanceScore}`);
  console.log(`total trick score: ${totalTrickScore}`);
};

main(combo);
