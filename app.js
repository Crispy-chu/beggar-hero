const SAVE_KEY = "beggarHeroSave_v1";
const MANUAL_SAVE_KEY = "beggarHeroManualSave_v2";
const BACKUP_SAVE_KEY = "beggarHeroSafetyBackup_v1";
const SAVE_CODE_ROLLBACK_KEY = "beggarHeroBeforeCodeLoad_v1";
const CLICK_PRICE_GROWTH = 1.18;
const CLICK_MASTERY_STEP = 25;
const CLICK_MASTERY_MULTIPLIER = 10;
const JOB_PRICE_GROWTH = 1.15;
const JOB_MASTERY_STEP = 10;
const JOB_MASTERY_MULTIPLIER = 3;
const TRAINING_PRICE_GROWTH = 1.085;
const TRAINING_MASTERY_STEP = 50;
const MAX_ENHANCEMENT = 30;

const DATA = {
  clickUpgrades: [
    { id: "finger", name: "손가락 단련", icon: "☝️", amount: 1, price: 10 },
    { id: "fast", name: "빠른 클릭", icon: "⚡", amount: 5, price: 100 },
    { id: "goldFinger", name: "황금 손가락", icon: "✨", amount: 50, price: 2000 },
    { id: "moneyScent", name: "돈 냄새 감지", icon: "👃", amount: 500, price: 50000 }
  ],
  jobs: [
    { id: "paper", name: "폐지 줍기", icon: "📦", income: 1, price: 50 },
    { id: "store", name: "편의점 알바", icon: "🏪", income: 10, price: 500 },
    { id: "delivery", name: "배달 알바", icon: "🛵", income: 100, price: 5000 },
    { id: "stall", name: "노점 장사", icon: "⛺", income: 1000, price: 75000 },
    { id: "pc", name: "PC방 사장", icon: "🖥️", income: 10000, price: 1000000 },
    { id: "mine", name: "코인 채굴장", icon: "⛏️", income: 100000, price: 20000000 },
    { id: "merc", name: "용병 회사", icon: "🏰", income: 1000000, price: 500000000 }
  ],
  training: [
    { id: "attack", name: "공격 훈련", icon: "⚔️", label: "공격력 +1", amount: 1, price: 100 },
    { id: "health", name: "체력 훈련", icon: "❤️", label: "체력 +10", amount: 10, price: 100 },
    { id: "defense", name: "방어 훈련", icon: "🛡️", label: "방어력 +1", amount: 1, price: 150 },
    { id: "luck", name: "행운 훈련", icon: "🍀", label: "행운 +1", amount: 1, price: 500 }
  ],
  weapons: [
    { id: "stick", name: "나무막대기", icon: "🪵", attack: 2, price: 50 },
    { id: "rusty", name: "녹슨 검", icon: "🗡️", attack: 10, price: 500 },
    { id: "steel", name: "강철검", icon: "⚔️", attack: 50, price: 10000 },
    { id: "gold", name: "황금검", icon: "🔱", attack: 250, price: 500000 },
    { id: "hero", name: "용사의 검", icon: "🗡️", attack: 1500, price: 50000000 }
  ],
  armors: [
    { id: "old", name: "낡은 옷", icon: "👕", health: 20, defense: 1, price: 100 },
    { id: "leather", name: "가죽 갑옷", icon: "🦺", health: 100, defense: 5, price: 2000 },
    { id: "iron", name: "철 갑옷", icon: "🥋", health: 500, defense: 20, price: 100000 },
    { id: "dragon", name: "드래곤 갑옷", icon: "🐉", health: 3000, defense: 100, price: 20000000 }
  ],
  accessories: [
    { id: "ring", name: "행운의 반지", icon: "💍", effect: "행운 +10", luck: 10, price: 10000 },
    { id: "necklace", name: "상인의 목걸이", icon: "📿", effect: "사냥 보상 +20%", reward: .2, price: 100000 },
    { id: "crown", name: "황금 왕관", icon: "👑", effect: "전체 수익 +50%", income: .5, price: 10000000 }
  ],
  zones: [
    { name: "뒷골목", monsters: [
      { id: "slime", name: "슬라임", icon: "🟢", health: 30, attack: 3, reward: 20, xp: 20, unlock: 3, material: "끈적한 점액" },
      { id: "rat", name: "들쥐", icon: "🐀", health: 50, attack: 5, reward: 50, xp: 35, unlock: 3, material: "쥐꼬리" },
      { id: "goblin", name: "양아치 고블린", icon: "👺", health: 120, attack: 10, reward: 150, xp: 65, unlock: 5, material: "구겨진 두건" }
    ]},
    { name: "폐광", monsters: [
      { id: "bat", name: "박쥐", icon: "🦇", health: 300, attack: 18, reward: 500, xp: 110, unlock: 3, material: "박쥐 날개" },
      { id: "zombie", name: "광부 좀비", icon: "🧟", health: 800, attack: 35, reward: 1500, xp: 220, unlock: 5, material: "녹슨 곡괭이" },
      { id: "golem", name: "돌 골렘", icon: "🗿", health: 2000, attack: 60, reward: 5000, xp: 500, unlock: 7, material: "마력의 돌" }
    ]},
    { name: "마왕성 입구", monsters: [
      { id: "skeleton", name: "해골병사", icon: "💀", health: 8000, attack: 120, reward: 30000, xp: 1400, unlock: 5, material: "저주받은 뼈" },
      { id: "darkKnight", name: "암흑기사", icon: "♞", health: 25000, attack: 300, reward: 150000, xp: 4000, unlock: 10, material: "암흑 철편" },
      { id: "miniDemon", name: "미니마왕", icon: "😈", health: 100000, attack: 800, reward: 1000000, xp: 12000, unlock: 1, material: "마왕의 뿔" }
    ]}
  ],
  blessings: [
    { id: "money", name: "돈의 축복", icon: "🪙", label: "전체 수익 +10%", value: .1 },
    { id: "attack", name: "전투 본능", icon: "⚔️", label: "공격력 +10%", value: .1 },
    { id: "health", name: "생존 본능", icon: "❤️", label: "체력 +10%", value: .1 },
    { id: "reward", name: "사냥꾼 본능", icon: "🏹", label: "사냥 보상 +10%", value: .1 },
    { id: "enhance", name: "강화 장인", icon: "🔨", label: "강화 성공률 +2%", value: .02 }
  ],
  gemPackages: [
    { id: "sample", name: "보석 맛보기", icon: "🔹", gems: 30, won: 390 },
    { id: "handful", name: "보석 한 줌", icon: "💎", gems: 100, won: 1100 },
    { id: "satchel", name: "모험가 보석함", icon: "🎒", gems: 300, won: 3300, bonus: "+30 보너스" },
    { id: "pouch", name: "보석 주머니", icon: "👝", gems: 550, won: 5500, bonus: "+50 보너스" },
    { id: "chest", name: "보석 상자", icon: "🧰", gems: 1200, won: 11000, bonus: "+200 보너스" },
    { id: "royal", name: "왕실 보석 상자", icon: "👑", gems: 2600, won: 22000, bonus: "+600 보너스" },
    { id: "vault", name: "보석 금고", icon: "🏦", gems: 4000, won: 33000, bonus: "+1,000 보너스" },
    { id: "mythic", name: "신화 보석고", icon: "🌌", gems: 10000, won: 77000, bonus: "+3,000 보너스" }
  ],
  gemShop: [
    { id: "goldenGlove", name: "황금 장갑", icon: "🧤", effect: "클릭 수익 영구 +50%", cost: 800, unique: true },
    { id: "businessLicense", name: "사업 허가증", icon: "📜", effect: "자동수익 영구 +50%", cost: 1200, unique: true },
    { id: "heroSeal", name: "용사의 인장", icon: "🏅", effect: "공격·체력 영구 +25%", cost: 1500, unique: true },
    { id: "luckyAnvil", name: "행운의 모루", icon: "⚒️", effect: "강화 성공률 +10%", cost: 1000, unique: true },
    { id: "timeWarp", name: "시간 가속", icon: "⏳", effect: "현재 자동수익 10분 즉시 획득", cost: 500 },
    { id: "goldChest", name: "황금 금고", icon: "🪙", effect: "현재 클릭수익 300회분 획득", cost: 250 }
  ],
  challenges: [
    { id: "tap500", name: "손가락 워밍업", icon: "☝️", label: "누적 클릭 500회", metric: "lifetimeClicks", target: 500, reward: { gold: 10000 } },
    { id: "tap5000", name: "쉬지 않는 손", icon: "⚡", label: "누적 클릭 5,000회", metric: "lifetimeClicks", target: 5000, reward: { gold: 200000 } },
    { id: "kill50", name: "몬스터 헌터", icon: "🏹", label: "몬스터 50마리 처치", metric: "lifetimeKills", target: 50, reward: { gold: 100000 } },
    { id: "enhance10", name: "강화 중독", icon: "🔨", label: "장비 강화 10회 시도", metric: "lifetimeEnhances", target: 10, reward: { gems: 80 } },
    { id: "million", name: "백만장자", icon: "💰", label: "누적 수익 100만원", metric: "lifetimeEarned", target: 1000000, reward: { gems: 100 } },
    { id: "rebirth", name: "새로운 인생", icon: "💠", label: "환생 1회", metric: "prestigeCount", target: 1, reward: { gems: 300 } },
    { id: "codex10", name: "수집가", icon: "📖", label: "몬스터 9종 발견", metric: "discoveredCount", target: 9, reward: { souls: 2 } }
  ]
};

const VILLAGE_BUILDINGS = [
  { id: "forge", name: "대장간", icon: "⚒️", base: 50000, effect: level => `장비 강화 비용 ${level * 5}% 절감`, next: "강화 비용 5% 추가 절감" },
  { id: "inn", name: "허름한 여관", icon: "🛏️", base: 100000, effect: level => `오프라인 수익 +${level * 5}% · 한도 ${8 + level}시간`, next: "오프라인 수익 +5% · 한도 +1시간" },
  { id: "guild", name: "원정 길드", icon: "🛡️", base: 250000, effect: level => `심연 유물 조각 +${level * 10}%`, next: "심연 유물 조각 +10%" },
  { id: "museum", name: "괴물 박물관", icon: "🏛️", base: 500000, effect: level => `도감 보너스 효율 +${level * 10}%`, next: "도감 보너스 효율 +10%" }
];

const EXPEDITION_BUFFS = [
  { id: "power", icon: "⚔️", name: "광전사의 표식", text: "이번 원정 공격력 +25%" },
  { id: "vitality", icon: "❤️", name: "거인의 심장", text: "최대 체력 +20% · 증가량만큼 회복" },
  { id: "guard", icon: "🛡️", name: "철벽의 맹세", text: "받는 피해 -15%" },
  { id: "crit", icon: "💥", name: "날카로운 감각", text: "크리티컬 확률 +10%" },
  { id: "recovery", icon: "✨", name: "야영의 불씨", text: "최대 체력의 35% 즉시 회복" },
  { id: "fortune", icon: "🔮", name: "탐욕의 나침반", text: "획득 유물 조각 +25%" }
];

const LIFE_CONTRACTS = [
  { id: "labor", icon: "☝️", name: "맨손 노동왕", rule: "클릭 수익 4배 · 공격력과 체력 35% 감소", goal: "이번 생 1,000회 클릭 + 미니마왕 처치", metric: state => [state.runClicks || 0, 1000] },
  { id: "hunter", icon: "🏹", name: "현상금 사냥꾼", rule: "사냥 보상 5배 · 몬스터 체력 50%, 공격력 35% 증가", goal: "이번 생 몬스터 40마리 + 미니마왕 처치", metric: state => [state.runKills || 0, 40] },
  { id: "tycoon", icon: "🏦", name: "무일푼 재벌", rule: "클릭·자동수익 2.5배 · 사냥 골드 80% 감소", goal: "이번 생 목표 금액 벌기 + 미니마왕 처치", metric: state => [state.runEarned || 0, contractMoneyGoal()] }
];

const LEGACY_UPGRADES = [
  { id: "hands", icon: "🖐️", name: "전설의 손", effect: "클릭 수익", per: 15 },
  { id: "warrior", icon: "🗡️", name: "계승된 육체", effect: "공격력·체력", per: 10 },
  { id: "fortune", icon: "🪙", name: "가문의 재산", effect: "전체 수익", per: 10 }
];

const RELICS = [
  { id: "thimble", icon: "🧿", name: "황금 골무", effect: "클릭 수익", per: 15 },
  { id: "clock", icon: "⏱️", name: "멈춘 시계", effect: "자동 수익", per: 15 },
  { id: "fang", icon: "🦷", name: "심연의 송곳니", effect: "공격력", per: 10 },
  { id: "shell", icon: "🐚", name: "고대의 껍질", effect: "체력", per: 10 },
  { id: "map", icon: "🗺️", name: "찢어진 심연 지도", effect: "원정 유물 조각", per: 20 },
  { id: "idol", icon: "🗿", name: "탐욕의 우상", effect: "사냥 보상", per: 12 }
];

function freshState() {
  return {
    balanceVersion: 9, money: 0, level: 1, xp: 0, statPoints: 0, souls: 0, gems: 0, relicShards: 0, legacyMarks: 0, worldTier: 1,
    lifetimeClicks: 0, lifetimeKills: 0, lifetimeEnhances: 0, lifetimeEarned: 0, prestigeCount: 0, runClicks: 0, runKills: 0, runEarned: 0,
    clickLevels: {}, jobs: {}, training: {}, pointStats: {},
    owned: { weapons: [], armors: [], accessories: [] },
    equipped: { weapon: null, armor: null, accessory: null },
    enhancements: {}, enhancePity: {}, blessings: {}, gemUpgrades: {}, legacyUpgrades: {}, relics: {}, equippedRelics: [], claimedGemPackages: {}, claimedChallenges: {}, discovered: {}, kills: {}, materials: {},
    activeContract: null, completedContracts: {},
    village: { forge: 0, inn: 0, guild: 0, museum: 0 },
    expeditionBest: 0, expeditionDepth: 1,
    expedition: { active: false, depth: 1, floor: 1, buffs: { power: 0, vitality: 0, guard: 0, crit: 0, fortune: 0 }, playerHp: 0, enemyHp: 0, awaitingChoice: false, choices: [] },
    unlockedZone: 0, selectedZone: 0, selectedMonster: 0,
    miniDemonKills: 0, totalEarned: 0, lastSave: Date.now()
  };
}

let state = loadGame();
let shopCategory = "weapons";
let gemStoreTab = "purchase";
let battle = { active: false, playerHp: 1, monsterHp: 1, elapsed: 0 };
let expeditionElapsed = 0;
let toastTimer = null;
let renderQueued = false;
let eventState = null;
let eventTimeout = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function format(value) {
  if (!Number.isFinite(value)) return "무한";
  value = Math.max(0, value);
  const units = [[1e20,"해"],[1e16,"경"],[1e12,"조"],[1e8,"억"],[1e4,"만"]];
  for (const [size, name] of units) {
    if (value >= size) {
      const n = value / size;
      return `${n >= 100 ? Math.floor(n) : n >= 10 ? n.toFixed(1) : n.toFixed(2)}${name}`.replace(/\.0+(?=\D)/, "");
    }
  }
  return Math.floor(value).toLocaleString("ko-KR");
}

function priceOf(base, count, rate) { return Math.ceil(base * Math.pow(rate, count)); }
function masteryGain(base, level, step, multiplier) {
  return base * Math.pow(multiplier, Math.floor(level / step));
}
function masteryTotal(base, count, step, multiplier) {
  if (!count) return 0;
  const tiers = Math.floor(count / step);
  const remainder = count % step;
  const completed = tiers ? base * step * (Math.pow(multiplier, tiers) - 1) / (multiplier - 1) : 0;
  return completed + base * remainder * Math.pow(multiplier, tiers);
}
function getItem(category, id) { return DATA[category].find(item => item.id === id); }
function enhancement(id) { return state.enhancements[id] || 0; }
function enhancementStatBonus(level) { return level * .1; }
function enhancementMultiplier(id) { return 1 + enhancementStatBonus(enhancement(id)); }
function accessoryMultiplier(id) { return 1 + enhancement(id) * .05; }
function enhancePity(id) { return state.enhancePity?.[id] || 0; }
function trainingTotal(id) {
  const item = getItem("training", id);
  if (!item) return 0;
  const count = state.training[id] || 0;
  const tiers = Math.floor(count / TRAINING_MASTERY_STEP);
  const remainder = count % TRAINING_MASTERY_STEP;
  const completed = item.amount * TRAINING_MASTERY_STEP * tiers * (tiers + 1) / 2;
  return completed + item.amount * remainder * (tiers + 1);
}
function trainingGain(item, count) { return item.amount * (1 + Math.floor(count / TRAINING_MASTERY_STEP)); }
function trainingPrice(item, count) {
  const curve = priceOf(item.price, count, TRAINING_PRICE_GROWTH);
  const incomeFloor = count < 25 ? 0 : clickValue() * (3 + count * .03);
  return Math.ceil(Math.max(curve, incomeFloor));
}
function relicLevel(id) { return state.equippedRelics?.includes(id) ? (state.relics?.[id] || 0) : 0; }
function contractMoneyGoal() { return 50000000 * Math.pow(2, Math.max(0, (state?.worldTier || 1) - 1)); }
function currentContract() { return LIFE_CONTRACTS.find(item => item.id === state.activeContract); }
function contractComplete() {
  const contract = currentContract();
  if (!contract || state.miniDemonKills < 1) return false;
  const [value, target] = contract.metric(state);
  return value >= target;
}
function worldHealthScale() { return Math.pow(1.55, Math.max(0, state.worldTier - 1)); }
function worldAttackScale() { return Math.pow(1.3, Math.max(0, state.worldTier - 1)); }
function worldRewardScale() { return Math.pow(2, Math.max(0, state.worldTier - 1)); }
function enhanceCost(item, next) {
  const traditional = item.price * next * .2;
  const clickBudget = Math.max(item.price * .2, clickValue() * (30 + next * 2));
  return Math.ceil(Math.min(traditional, clickBudget) * Math.max(.5, 1 - (state.village.forge || 0) * .05));
}
function enhanceBaseChance(next) {
  return next <= 3 ? 1 : next <= 6 ? .75 : next <= 10 ? .5 : next <= 15 ? .35 : next <= 20 ? .22 : next <= 25 ? .14 : .08;
}
function enhanceChance(next, id) {
  const bonus = (state.blessings.enhance || 0) * .02 + (state.gemUpgrades.luckyAnvil ? .1 : 0) + enhancePity(id) * .05;
  return Math.min(1, enhanceBaseChance(next) + bonus);
}

function clickValue() {
  let value = 1;
  DATA.clickUpgrades.forEach(item => value += masteryTotal(item.amount, state.clickLevels[item.id] || 0, CLICK_MASTERY_STEP, CLICK_MASTERY_MULTIPLIER));
  if (state.gemUpgrades.goldenGlove) value *= 1.5;
  value *= 1 + (state.legacyUpgrades.hands || 0) * .15 + relicLevel("thimble") * .15;
  if (state.activeContract === "labor") value *= 4;
  if (state.activeContract === "tycoon") value *= 2.5;
  return value * incomeMultiplier();
}

function baseIncome() {
  let value = DATA.jobs.reduce((sum, job) => sum + masteryTotal(job.income, state.jobs[job.id] || 0, JOB_MASTERY_STEP, JOB_MASTERY_MULTIPLIER), 0);
  if (state.gemUpgrades.businessLicense) value *= 1.5;
  value *= 1 + relicLevel("clock") * .15;
  if (state.activeContract === "tycoon") value *= 2.5;
  return value;
}

function incomeMultiplier() {
  let mult = 1 + (state.blessings.money || 0) * .1;
  const acc = getItem("accessories", state.equipped.accessory);
  if (acc?.income) mult += acc.income * accessoryMultiplier(acc.id);
  mult *= 1 + (state.legacyUpgrades.fortune || 0) * .1;
  return mult;
}

function rewardMultiplier() {
  let mult = 1 + (state.blessings.reward || 0) * .1;
  const acc = getItem("accessories", state.equipped.accessory);
  if (acc?.reward) mult += acc.reward * accessoryMultiplier(acc.id);
  mult += discoveredCount() * .01 * (1 + (state.village.museum || 0) * .1);
  mult *= 1 + relicLevel("idol") * .12;
  if (state.activeContract === "hunter") mult *= 5;
  if (state.activeContract === "tycoon") mult *= .2;
  return mult;
}

function discoveredCount() { return DATA.zones.flatMap(zone => zone.monsters).filter(monster => state.discovered?.[monster.id]).length; }

function stats() {
  const weapon = getItem("weapons", state.equipped.weapon);
  const armor = getItem("armors", state.equipped.armor);
  const acc = getItem("accessories", state.equipped.accessory);
  const levelUps = state.level - 1;
  let attack = 5 + levelUps * 3 + trainingTotal("attack") + (state.pointStats.strength || 0) * 2;
  let health = 100 + levelUps * 30 + trainingTotal("health") + (state.pointStats.life || 0) * 20;
  let defense = levelUps + trainingTotal("defense") + (state.pointStats.guard || 0);
  let luck = trainingTotal("luck") + (state.pointStats.luck || 0);
  if (weapon) attack += weapon.attack * enhancementMultiplier(weapon.id);
  if (armor) {
    health += armor.health * enhancementMultiplier(armor.id);
    defense += armor.defense * enhancementMultiplier(armor.id);
  }
  if (acc?.luck) luck += acc.luck * accessoryMultiplier(acc.id);
  const attackBonus = (state.blessings.attack || 0) * .1 + (state.gemUpgrades.heroSeal ? .25 : 0) + (acc?.attackPercent || 0) * (acc ? accessoryMultiplier(acc.id) : 1);
  const healthBonus = (state.blessings.health || 0) * .1 + (state.gemUpgrades.heroSeal ? .25 : 0) + (acc?.healthPercent || 0) * (acc ? accessoryMultiplier(acc.id) : 1);
  attack *= 1 + attackBonus;
  health *= 1 + healthBonus;
  attack *= 1 + (state.legacyUpgrades.warrior || 0) * .1 + relicLevel("fang") * .1;
  health *= 1 + (state.legacyUpgrades.warrior || 0) * .1 + relicLevel("shell") * .1;
  if (state.activeContract === "labor") { attack *= .65; health *= .65; }
  return { attack: Math.floor(attack), health: Math.floor(health), defense: Math.floor(defense), luck: Math.floor(luck) };
}

function scaledMonster(monster) {
  const contractHealth = state.activeContract === "hunter" ? 1.5 : 1;
  const contractAttack = state.activeContract === "hunter" ? 1.35 : 1;
  return {
    ...monster,
    health: Math.floor(monster.health * worldHealthScale() * contractHealth),
    attack: Math.floor(monster.attack * worldAttackScale() * contractAttack),
    reward: Math.floor(monster.reward * worldRewardScale())
  };
}

function xpNeeded(level = state.level) { return Math.floor(100 * Math.pow(level, 1.5)); }

function earn(amount) {
  state.money += amount;
  state.totalEarned += amount;
  state.lifetimeEarned += amount;
  state.runEarned += amount;
  renderTop();
  refreshAffordability();
}

function spend(amount) {
  if (state.money + .0001 < amount) return false;
  state.money -= amount;
  return true;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1700);
}

function moneyPop(x, y, amount, critical = false) {
  const el = document.createElement("span");
  el.className = "money-pop";
  el.textContent = `${critical ? "대박! " : "+"}${format(amount)}원`;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 750);
}

function renderTop() {
  const s = stats();
  $("#money").textContent = `${format(state.money)}원`;
  $("#incomePerSecond").textContent = `+${format(baseIncome() * incomeMultiplier())}원 / 초`;
  $("#stickyMoney").textContent = `${format(state.money)}원`;
  $("#stickyIncome").textContent = `+${format(baseIncome() * incomeMultiplier())}원 / 초`;
  $("#clickIncome").textContent = `한 번에 +${format(clickValue())}원`;
  $("#levelLabel").textContent = `Lv.${state.level}`;
  $("#titleLabel").textContent = titleForLevel();
  $("#xpText").textContent = `${format(state.xp)} / ${format(xpNeeded())} XP`;
  $("#xpBar").style.width = `${Math.min(100, state.xp / xpNeeded() * 100)}%`;
  $("#soulCount").textContent = format(state.souls);
  $("#gemCount").textContent = format(state.gems);
  $("#attackStat").textContent = format(s.attack);
  $("#healthStat").textContent = format(s.health);
  $("#defenseStat").textContent = format(s.defense);
  $("#luckStat").textContent = format(s.luck);
  $("#statPoints").textContent = state.statPoints;
}

function titleForLevel() {
  if (state.miniDemonKills) return "마왕을 꺾은 자";
  if (state.level >= 25) return "왕국의 용사";
  if (state.level >= 15) return "어엿한 모험가";
  if (state.level >= 7) return "골목의 싸움꾼";
  if (state.level >= 3) return "동전 줍는 사람";
  return "맨발의 거지";
}

function renderClickUpgrades() {
  $("#clickList").innerHTML = DATA.clickUpgrades.map((item, index) => {
    const count = state.clickLevels[item.id] || 0;
    const price = priceOf(item.price, count, CLICK_PRICE_GROWTH);
    const nextGain = masteryGain(item.amount, count, CLICK_MASTERY_STEP, CLICK_MASTERY_MULTIPLIER) * incomeMultiplier() * (state.gemUpgrades.goldenGlove ? 1.5 : 1);
    const locked = index > 0 && !(state.clickLevels[DATA.clickUpgrades[index - 1].id] || 0);
    const masteryLeft = CLICK_MASTERY_STEP - count % CLICK_MASTERY_STEP;
    return itemCard(item.icon, item.name, `다음 강화: 클릭당 +${format(nextGain)}원`, `${count}회 · 숙련 10배까지 ${masteryLeft}회 · 회수 ${Math.ceil(price / Math.max(1, nextGain))}클릭`, price, "buy-click", item.id, locked);
  }).join("");
}

function renderJobs() {
  $("#jobsList").innerHTML = DATA.jobs.map((job, index) => {
    const count = state.jobs[job.id] || 0;
    const price = priceOf(job.price, count, JOB_PRICE_GROWTH);
    const nextIncome = masteryGain(job.income, count, JOB_MASTERY_STEP, JOB_MASTERY_MULTIPLIER) * incomeMultiplier() * (state.gemUpgrades.businessLicense ? 1.5 : 1);
    const locked = index > 1 && !(state.jobs[DATA.jobs[index - 1].id] || 0) && state.money < job.price;
    const masteryLeft = JOB_MASTERY_STEP - count % JOB_MASTERY_STEP;
    return itemCard(job.icon, job.name, `다음 구매: 초당 +${format(nextIncome)}원`, `${count}개 · 숙련 3배까지 ${masteryLeft}개 · 회수 ${Math.ceil(price / Math.max(1, nextIncome))}초`, price, "buy-job", job.id, locked);
  }).join("");
}

function renderTraining() {
  $("#trainingList").innerHTML = DATA.training.map(item => {
    const count = state.training[item.id] || 0;
    const price = trainingPrice(item, count);
    const nextGain = trainingGain(item, count);
    const total = trainingTotal(item.id);
    const unit = item.id === "health" ? "체력" : item.id === "attack" ? "공격력" : item.id === "defense" ? "방어력" : "행운";
    const masteryLeft = TRAINING_MASTERY_STEP - count % TRAINING_MASTERY_STEP;
    return itemCard(item.icon, item.name, `다음 훈련: ${unit} +${format(nextGain)}`, `${count}회 · 누적 +${format(total)} · 다음 효과 상승까지 ${masteryLeft}회`, price, "buy-training", item.id, false);
  }).join("");
  const points = [
    ["strength","💪 힘","공격력 +2"],["life","♥ 생명","체력 +20"],["guard","🛡 방어","방어력 +1"],["luck","✦ 행운","행운 +1"]
  ];
  $("#pointList").innerHTML = points.map(([id,name,effect]) => `<button data-action="spend-point" data-id="${id}" ${state.statPoints < 1 ? "disabled" : ""}><b>${name} <em>+${state.pointStats[id] || 0}</em></b><small>${effect}</small></button>`).join("");
}

function itemCard(icon, name, effect, detail, price, action, id, locked = false) {
  const affordable = state.money >= price && !locked;
  return `<div class="item-card ${locked ? "locked" : ""}"><div class="item-icon">${locked ? "🔒" : icon}</div><div class="item-copy"><b>${name}</b><span>${effect}</span><small>${detail}</small></div><button class="buy-button" data-action="${action}" data-id="${id}" data-cost="${price}" data-locked="${locked}" ${affordable ? "" : "disabled"}>${locked ? "잠김" : format(price) + "원"}</button></div>`;
}

function renderGear() {
  const weapon = getItem("weapons", state.equipped.weapon);
  const armor = getItem("armors", state.equipped.armor);
  const acc = getItem("accessories", state.equipped.accessory);
  $("#equippedWeapon").textContent = weapon ? `${weapon.name} +${enhancement(weapon.id)}` : "맨주먹";
  $("#weaponBonus").textContent = weapon ? `공격력 +${format(weapon.attack * enhancementMultiplier(weapon.id))}` : "공격력 +0";
  $("#equippedArmor").textContent = armor ? `${armor.name} +${enhancement(armor.id)}` : "누더기";
  $("#armorBonus").textContent = armor ? `체력 +${format(armor.health * enhancementMultiplier(armor.id))} · 방어 +${format(armor.defense * enhancementMultiplier(armor.id))}` : "체력 +0 · 방어 +0";
  $("#equippedAccessory").textContent = acc ? `${acc.name} +${enhancement(acc.id)}` : "비어 있음";
  $("#accessoryBonus").textContent = acc ? `${acc.effect} · 강화 배율 ×${accessoryMultiplier(acc.id).toFixed(2)}` : "효과 없음";
  $("#heroWeapon").textContent = weapon?.icon || "🪵";
  [["weapon",weapon],["armor",armor],["accessory",acc]].forEach(([slot,item]) => {
    const button = document.querySelector(`[data-enhance="${slot}"]`);
    if (!item) { button.disabled = true; button.dataset.locked = "true"; button.dataset.cost = "0"; button.innerHTML = `장비 없음`; return; }
    const current = enhancement(item.id);
    if (current >= MAX_ENHANCEMENT) { button.disabled = true; button.dataset.locked = "true"; button.dataset.cost = "0"; button.innerHTML = `최고 강화 +${MAX_ENHANCEMENT}`; return; }
    const next = current + 1;
    const cost = enhanceCost(item, next);
    const pity = enhancePity(item.id);
    const chance = enhanceChance(next, item.id);
    const tierLabel = next === 11 || next === 21 ? " · 돌파" : "";
    button.dataset.locked = "false";
    button.dataset.cost = String(cost);
    button.disabled = state.money < cost;
    button.innerHTML = `+${next} 강화${tierLabel} <small>${format(cost)}원 · 성공 ${Math.round(chance*100)}%${pity ? ` · 천장 +${pity*5}%` : ""}</small>`;
  });

  const list = DATA[shopCategory];
  $("#shopList").innerHTML = list.map(item => {
    const isOwned = state.owned[shopCategory].includes(item.id);
    const slot = { weapons: "weapon", armors: "armor", accessories: "accessory" }[shopCategory];
    const isEquipped = state.equipped[slot] === item.id;
    const effect = shopCategory === "weapons" ? `공격력 +${format(item.attack)}` : shopCategory === "armors" ? `체력 +${format(item.health)} · 방어 +${format(item.defense)}` : item.effect;
    const label = isEquipped ? "장착 중" : isOwned ? "장착" : `${format(item.price)}원`;
    const disabled = isEquipped || (!isOwned && state.money < item.price);
    return `<div class="item-card"><div class="item-icon">${item.icon}</div><div class="item-copy"><b>${item.name}</b><span>${effect}</span><small>${isOwned ? `강화 +${enhancement(item.id)}` : "아직 미보유"}</small></div><button class="buy-button ${isOwned ? "owned" : ""}" data-action="buy-gear" data-id="${item.id}" data-cost="${isOwned ? 0 : item.price}" data-locked="${isEquipped}" ${disabled ? "disabled" : ""}>${label}</button></div>`;
  }).join("");
}

function currentMonster() { return scaledMonster(DATA.zones[state.selectedZone].monsters[state.selectedMonster]); }
function monsterUnlocked(zone, index) {
  if (zone > state.unlockedZone) return false;
  if (index === 0) return true;
  const previous = DATA.zones[zone].monsters[index - 1];
  return (state.kills[previous.id] || 0) >= previous.unlock;
}

function renderHunt() {
  const zone = DATA.zones[state.selectedZone];
  const monster = currentMonster();
  $("#zoneNumber").textContent = `세계 ${state.worldTier} · 지역 ${state.selectedZone + 1}`;
  $("#zoneName").textContent = zone.name;
  $("#prevZone").disabled = state.selectedZone === 0;
  $("#nextZone").disabled = state.selectedZone >= state.unlockedZone || state.selectedZone >= DATA.zones.length - 1;
  $("#monsterSprite").textContent = monster.icon;
  $("#monsterName").textContent = monster.name;
  const cleared = zone.monsters.filter(m => (state.kills[m.id] || 0) >= m.unlock).length;
  $("#zoneClearText").textContent = `${cleared} / ${zone.monsters.length} 정복`;
  $("#monsterList").innerHTML = zone.monsters.map((m, index) => {
    const unlocked = monsterUnlocked(state.selectedZone, index);
    const kills = state.kills[m.id] || 0;
    return `<button class="monster-card ${index === state.selectedMonster ? "selected" : ""} ${unlocked ? "" : "locked"}" data-action="select-monster" data-id="${index}" ${unlocked ? "" : "disabled"}><span class="monster-icon">${unlocked ? m.icon : "🔒"}</span><b>${m.name}</b><small>${format(scaledMonster(m).reward)}원</small>${unlocked ? `<em>${Math.min(kills, m.unlock)}/${m.unlock}</em>` : ""}</button>`;
  }).join("");
  const s = stats();
  if (!battle.active) {
    battle.playerHp = s.health;
    battle.monsterHp = monster.health;
  }
  $("#playerHpBar").style.width = `${Math.max(0, battle.playerHp / s.health * 100)}%`;
  $("#playerHpText").textContent = `${format(battle.playerHp)} / ${format(s.health)}`;
  $("#monsterHpBar").style.width = `${Math.max(0, battle.monsterHp / monster.health * 100)}%`;
  $("#monsterHpText").textContent = `${format(battle.monsterHp)} / ${format(monster.health)}`;
  $("#battleButton").textContent = battle.active ? "■ 사냥 중지" : "⚔ 사냥 시작";
}

function renderMore() {
  const canPrestige = state.miniDemonKills > 0;
  const reward = prestigeReward();
  $("#prestigeReward").textContent = `${reward}개`;
  $("#prestigeButton").disabled = !canPrestige;
  $("#prestigeButton").textContent = canPrestige ? `📜 환생 계약 선택 · 영혼석 ${reward}개` : "미니마왕을 쓰러뜨리세요";
  $("#shopGemCount").textContent = format(state.gems);
  renderGemStore();
  renderChallenges();
  const found = discoveredCount();
  const monsterTotal = DATA.zones.reduce((sum, zone) => sum + zone.monsters.length, 0);
  $("#codexProgress").textContent = `${found} / ${monsterTotal} 발견`;
  $("#expeditionSummary").textContent = `최고 ${state.expeditionBest}층 · 유물 ${format(state.relicShards)}`;
  const villageLevels = Object.values(state.village).reduce((sum, level) => sum + Number(level || 0), 0);
  $("#villageSummary").textContent = villageLevels >= VILLAGE_BUILDINGS.length * 5 ? "복구 완료 · 영구 지원 4종" : `복구 ${villageLevels} / ${VILLAGE_BUILDINGS.length * 5}`;
  const contract = currentContract();
  $("#contractSummary").textContent = contract ? `${contractComplete() ? "완료" : "진행 중"} · 세계 ${state.worldTier}` : `계약 없음 · 세계 ${state.worldTier}`;
  $("#blessingList").innerHTML = DATA.blessings.map(item => {
    const level = state.blessings[item.id] || 0;
    const price = level + 1;
    const canBuy = state.souls >= price;
    return `<div class="item-card"><div class="item-icon">${item.icon}</div><div class="item-copy"><b>${item.name}</b><span>${item.label}</span><small>현재 Lv.${level}</small></div><button class="buy-button" data-action="buy-blessing" data-id="${item.id}" ${canBuy ? "" : "disabled"}>💠 ${price}</button></div>`;
  }).join("");
}

function renderContracts() {
  $("#contractWorldTier").textContent = `세계 ${state.worldTier}`;
  $("#legacyMarkCount").textContent = format(state.legacyMarks);
  const contract = currentContract();
  if (contract) {
    const [value, target] = contract.metric(state);
    const mainProgress = Math.min(100, value / target * 100);
    const bossDone = state.miniDemonKills > 0;
    $("#activeContract").innerHTML = `<span>${contract.icon}</span><div><small>현재 삶의 규칙</small><b>${contract.name}</b><p>${contract.rule}</p><div class="contract-progress"><i style="width:${mainProgress}%"></i></div><em>${contract.goal} · ${format(Math.min(value,target))}/${format(target)} · 마왕 ${bossDone ? "완료" : "미완료"}</em></div><strong>${contractComplete() ? `완료 · 인장 ${state.worldTier}개` : "진행 중"}</strong>`;
  } else {
    $("#activeContract").innerHTML = `<span>📜</span><div><small>현재 삶의 규칙</small><b>자유로운 삶</b><p>적용 중인 계약이 없습니다. 다음 환생부터 특별한 규칙과 목표가 생깁니다.</p></div><strong>계약 없음</strong>`;
  }
  const canPrestige = state.miniDemonKills > 0;
  $("#contractChoices").innerHTML = LIFE_CONTRACTS.map(item => `<article class="contract-card"><span>${item.icon}</span><div><b>${item.name}</b><p>${item.rule}</p><small>${item.goal}</small></div><button data-action="start-contract" data-id="${item.id}" ${canPrestige ? "" : "disabled"}>${canPrestige ? "이 계약으로 환생" : "마왕 처치 필요"}</button></article>`).join("");
  $("#contractWarning").textContent = canPrestige ? `${contractComplete() ? `현재 계약 완료 보너스: 운명 인장 ${state.worldTier}개 · 다음 세계 단계 상승` : contract ? "현재 계약을 포기하고 환생하면 인장과 세계 단계 상승을 받지 못합니다." : "첫 계약을 선택하면 보유 영혼석 보상과 함께 새 삶이 시작됩니다."}` : "미니마왕을 한 번 처치하면 다음 삶의 계약을 고를 수 있습니다.";
  $("#legacyShop").innerHTML = LEGACY_UPGRADES.map(item => {
    const level = state.legacyUpgrades[item.id] || 0;
    const cost = level + 1;
    const maxed = level >= 10;
    return `<article><span>${item.icon}</span><div><b>${item.name} Lv.${level}</b><small>${item.effect} +${level * item.per}% · 환생 유지</small></div><button data-action="buy-legacy" data-id="${item.id}" ${maxed || state.legacyMarks < cost ? "disabled" : ""}>${maxed ? "최고" : `◆ ${cost}`}</button></article>`;
  }).join("");
}

function buyLegacy(id) {
  const item = LEGACY_UPGRADES.find(entry => entry.id === id);
  const level = state.legacyUpgrades[id] || 0;
  const cost = level + 1;
  if (!item || level >= 10 || state.legacyMarks < cost) return;
  state.legacyMarks -= cost;
  state.legacyUpgrades[id] = level + 1;
  saveGame(false);
  renderContracts();
  render();
  showToast(`${item.name} Lv.${level + 1} 계승 완료!`);
}

function challengeValue(challenge) {
  return challenge.metric === "discoveredCount" ? discoveredCount() : Number(state[challenge.metric] || 0);
}

function challengeRewardText(reward) {
  if (reward.gold) return `${format(reward.gold)}원`;
  if (reward.gems) return `💎 ${format(reward.gems)}`;
  if (reward.souls) return `💠 ${format(reward.souls)}`;
  return "보상";
}

function renderChallenges() {
  const claimedCount = DATA.challenges.filter(item => state.claimedChallenges[item.id]).length;
  $("#challengeProgress").textContent = `${claimedCount} / ${DATA.challenges.length} 완료`;
  $("#challengeList").innerHTML = DATA.challenges.map(item => {
    const value = challengeValue(item);
    const ready = value >= item.target;
    const claimed = state.claimedChallenges[item.id];
    const progress = Math.min(100, value / item.target * 100);
    return `<article class="challenge-card ${claimed ? "done" : ""}"><span class="challenge-icon">${item.icon}</span><div class="challenge-copy"><b>${item.name}</b><small>${item.label} · ${format(Math.min(value,item.target))}/${format(item.target)}</small><div class="challenge-progressbar"><i style="width:${progress}%"></i></div></div><button data-action="claim-challenge" data-id="${item.id}" ${ready && !claimed ? "" : "disabled"}>${claimed ? "완료" : ready ? challengeRewardText(item.reward) : "진행 중"}</button></article>`;
  }).join("");
}

function renderProfile() {
  const s = stats();
  const acc = getItem("accessories", state.equipped.accessory);
  const accMult = acc ? accessoryMultiplier(acc.id) : 1;
  const overallIncome = (incomeMultiplier() - 1) * 100;
  const clickSpecial = (state.gemUpgrades.goldenGlove ? 1.5 : 1) * (1 + (state.legacyUpgrades.hands || 0) * .15 + relicLevel("thimble") * .15) * (state.activeContract === "labor" ? 4 : state.activeContract === "tycoon" ? 2.5 : 1);
  const autoSpecial = (state.gemUpgrades.businessLicense ? 1.5 : 1) * (1 + relicLevel("clock") * .15) * (state.activeContract === "tycoon" ? 2.5 : 1);
  const clickBonus = ((1 + overallIncome / 100) * clickSpecial - 1) * 100;
  const autoBonus = ((1 + overallIncome / 100) * autoSpecial - 1) * 100;
  const baseAttackBonus = (state.blessings.attack || 0) * .1 + (state.gemUpgrades.heroSeal ? .25 : 0) + (acc?.attackPercent || 0) * accMult;
  const baseHealthBonus = (state.blessings.health || 0) * .1 + (state.gemUpgrades.heroSeal ? .25 : 0) + (acc?.healthPercent || 0) * accMult;
  const attackBonus = ((1 + baseAttackBonus) * (1 + (state.legacyUpgrades.warrior || 0) * .1 + relicLevel("fang") * .1) * (state.activeContract === "labor" ? .65 : 1) - 1) * 100;
  const healthBonus = ((1 + baseHealthBonus) * (1 + (state.legacyUpgrades.warrior || 0) * .1 + relicLevel("shell") * .1) * (state.activeContract === "labor" ? .65 : 1) - 1) * 100;
  const rewardBonus = (rewardMultiplier() * worldRewardScale() - 1) * 100;
  const critChance = Math.min(75, 5 + s.luck * .2);
  const enhanceBonus = (state.blessings.enhance || 0) * 2 + (state.gemUpgrades.luckyAnvil ? 10 : 0);
  const joinSources = list => list.filter(Boolean).join(" · ") || "적용 효과 없음";
  const incomeSources = joinSources([
    state.blessings.money ? `돈의 축복 +${state.blessings.money*10}%` : "",
    acc?.income ? `${acc.name} +${Number((acc.income*accMult*100).toFixed(1))}%` : "",
    state.legacyUpgrades.fortune ? `가문의 재산 +${state.legacyUpgrades.fortune*10}%` : ""
  ]);
  const attackSources = joinSources([
    state.blessings.attack ? `전투 본능 +${state.blessings.attack*10}%` : "",
    state.gemUpgrades.heroSeal ? "용사의 인장 +25%" : "",
    acc?.attackPercent ? `${acc.name} +${Number((acc.attackPercent*accMult*100).toFixed(1))}%` : "",
    state.legacyUpgrades.warrior ? `계승된 육체 +${state.legacyUpgrades.warrior*10}%` : "",
    relicLevel("fang") ? `심연의 송곳니 +${relicLevel("fang")*10}%` : "",
    state.activeContract === "labor" ? "맨손 노동왕 -35%" : ""
  ]);
  const healthSources = joinSources([
    state.blessings.health ? `생존 본능 +${state.blessings.health*10}%` : "",
    state.gemUpgrades.heroSeal ? "용사의 인장 +25%" : "",
    acc?.healthPercent ? `${acc.name} +${Number((acc.healthPercent*accMult*100).toFixed(1))}%` : "",
    state.legacyUpgrades.warrior ? `계승된 육체 +${state.legacyUpgrades.warrior*10}%` : "",
    relicLevel("shell") ? `고대의 껍질 +${relicLevel("shell")*10}%` : "",
    state.activeContract === "labor" ? "맨손 노동왕 -35%" : ""
  ]);
  const rewardSources = joinSources([
    state.blessings.reward ? `사냥꾼 본능 +${state.blessings.reward*10}%` : "",
    acc?.reward ? `${acc.name} +${Number((acc.reward*accMult*100).toFixed(1))}%` : "",
    discoveredCount() ? `도감 ${discoveredCount()}종 +${Number((discoveredCount() * (1 + (state.village.museum || 0) * .1)).toFixed(1))}%${state.village.museum ? ` (박물관 Lv.${state.village.museum})` : ""}` : "",
    `세계 ${state.worldTier} 보상 ×${Number(worldRewardScale().toFixed(2))}`,
    relicLevel("idol") ? `탐욕의 우상 +${relicLevel("idol")*12}%` : "",
    state.activeContract === "hunter" ? "현상금 사냥꾼 ×5" : "",
    state.activeContract === "tycoon" ? "무일푼 재벌 ×0.2" : ""
  ]);
  $("#profileTotals").innerHTML = [
    ["⚔ 최종 공격력",format(s.attack)],["♥ 최종 체력",format(s.health)],["◆ 최종 방어력",format(s.defense)],["✦ 최종 행운",format(s.luck)],
    ["☝ 클릭 수익",`${format(clickValue())}원`],["⏱ 자동수익",`${format(baseIncome()*incomeMultiplier())}원/s`]
  ].map(([label,value])=>`<div><span>${label}</span><b>${value}</b></div>`).join("");
  const rows = [
    ["🪙","전체 수익",incomeSources,overallIncome],
    ["☝️","클릭 수익",joinSources([incomeSources === "적용 효과 없음" ? "" : incomeSources,state.gemUpgrades.goldenGlove?"황금 장갑 +50%":"",state.legacyUpgrades.hands?`전설의 손 +${state.legacyUpgrades.hands*15}%`:"",relicLevel("thimble")?`황금 골무 +${relicLevel("thimble")*15}%`:"",state.activeContract==="labor"?"맨손 노동왕 ×4":"",state.activeContract==="tycoon"?"무일푼 재벌 ×2.5":""]),clickBonus],
    ["⏱️","자동 수익",joinSources([incomeSources === "적용 효과 없음" ? "" : incomeSources,state.gemUpgrades.businessLicense?"사업 허가증 +50%":"",relicLevel("clock")?`멈춘 시계 +${relicLevel("clock")*15}%`:"",state.activeContract==="tycoon"?"무일푼 재벌 ×2.5":""]),autoBonus],
    ["⚔️","공격력",attackSources,attackBonus],
    ["❤️","체력",healthSources,healthBonus],
    ["🏹","사냥 보상",rewardSources,rewardBonus],
    ["💥","크리티컬 확률",`기본 5% + 행운 ${format(s.luck)} × 0.2%`,critChance],
    ["🔨","강화 성공 보정",joinSources([state.blessings.enhance?`강화 장인 +${state.blessings.enhance*2}%`:"",state.gemUpgrades.luckyAnvil?"행운의 모루 +10%":""]),enhanceBonus],
    ["🏘️","강화 비용 절감",state.village.forge ? `대장간 Lv.${state.village.forge}` : "적용 효과 없음",(state.village.forge || 0) * 5],
    ["🛏️","오프라인 수익",state.village.inn ? `여관 Lv.${state.village.inn} · 최대 ${8 + state.village.inn}시간` : "기본 최대 8시간",(state.village.inn || 0) * 5]
  ];
  $("#bonusList").innerHTML = rows.map(([icon,name,source,value])=>`<div class="bonus-row ${value ? "" : "zero"}"><span>${icon}</span><div><b>${name}</b><small>${source}</small></div><strong>${value >= 0 ? "+" : ""}${Number(value.toFixed(1))}%</strong></div>`).join("");
  $("#statHelp").innerHTML = [
    ["⚔ 공격력","1초마다 몬스터에게 주는 기본 피해입니다. 실제 피해는 90~110% 사이로 변동합니다."],
    ["♥ 체력","전투에서 버틸 수 있는 생명력입니다. 0이 되면 페널티 없이 사냥이 종료됩니다."],
    ["◆ 방어력","몬스터의 공격력에서 방어력만큼 피해를 줄입니다. 최소 1의 피해는 받습니다."],
    ["✦ 행운","1당 크리티컬 확률이 0.2% 증가합니다. 크리티컬 피해는 2배입니다."],
    ["🪙 전체 수익","클릭과 자동수익 모두에 적용됩니다. 같은 종류의 보너스는 합산됩니다."],
    ["🏹 사냥 보상","몬스터 처치 골드에 적용됩니다. 도감은 발견한 몬스터 1종당 1%를 더하고, 박물관이 그 효과를 증폭합니다."]
  ].map(([name,text])=>`<div><b>${name}</b><p>${text}</p></div>`).join("");
}

function renderCodex() {
  $("#codexList").innerHTML = DATA.zones.flatMap((zone, zoneIndex) => zone.monsters.map(monster => {
    const found = !!state.discovered[monster.id];
    const kills = state.kills[monster.id] || 0;
    return `<article class="codex-entry ${found ? "" : "unknown"}"><span>${found ? monster.icon : "❔"}</span><b>${found ? monster.name : "미발견"}</b><small>${found ? `${zoneIndex+1}지역 · ${monster.material}` : "사냥에서 만나보세요"}</small>${found ? `<em>${kills}회</em>` : ""}</article>`;
  })).join("");
}

function totalMaterials() {
  return Object.values(state.materials || {}).reduce((sum, count) => sum + Math.max(0, Number(count) || 0), 0);
}

function spendMaterials(amount) {
  if (totalMaterials() < amount) return false;
  let left = amount;
  Object.keys(state.materials).sort().forEach(name => {
    if (left <= 0) return;
    const used = Math.min(left, Math.max(0, Number(state.materials[name]) || 0));
    state.materials[name] -= used;
    left -= used;
  });
  return true;
}

function villageCost(building, level) { return Math.ceil(building.base * Math.pow(5, level)); }
function villageMaterialCost(level) { return 5 + level * 5; }

function renderVillage() {
  $("#villageGold").textContent = `${format(state.money)}원`;
  $("#villageMaterials").textContent = `${format(totalMaterials())}개`;
  $("#villageList").innerHTML = VILLAGE_BUILDINGS.map(building => {
    const level = state.village[building.id] || 0;
    const maxed = level >= 5;
    const gold = villageCost(building, level);
    const materials = villageMaterialCost(level);
    const canBuild = !maxed && state.money >= gold && totalMaterials() >= materials;
    return `<article class="village-card ${maxed ? "maxed" : ""}"><span class="village-icon">${building.icon}</span><div class="village-copy"><div><b>${building.name}</b><em>Lv.${level} / 5</em></div><p>${level ? building.effect(level) : "아직 복구되지 않음"}</p><small>${maxed ? "복구 완료" : building.next}</small></div><button data-action="upgrade-village" data-id="${building.id}" data-village-cost="${gold}" data-material-cost="${materials}" ${canBuild ? "" : "disabled"}>${maxed ? "완공" : `${format(gold)}원 · 재료 ${materials}`}</button></article>`;
  }).join("");
}

function upgradeVillage(id) {
  const building = VILLAGE_BUILDINGS.find(item => item.id === id);
  const level = state.village[id] || 0;
  if (!building || level >= 5) return;
  const gold = villageCost(building, level);
  const materials = villageMaterialCost(level);
  if (state.money < gold || totalMaterials() < materials) return showToast("골드와 몬스터 재료가 더 필요합니다.");
  if (!spend(gold) || !spendMaterials(materials)) return;
  state.village[id] = level + 1;
  saveGame(false);
  renderVillage();
  renderMore();
  if (id === "museum") renderProfile();
  showToast(`${building.name} Lv.${level + 1} 복구 완료!`);
}

function expeditionMaxHp() {
  return Math.max(1, Math.floor(stats().health * (1 + (state.expedition.buffs.vitality || 0) * .2)));
}

function expeditionEnemy(floor = state.expedition.floor) {
  const enemies = [
    ["그림자 쥐","🐀"],["굶주린 망령","👻"],["심연 박쥐","🦇"],["갑옷 망자","🧟"],["탐욕의 골렘","🗿"],
    ["저주받은 기사","♞"],["심연의 사냥꾼","👹"],["공허 마도사","🧙"],["검은 파수꾼","💀"],["나의 그림자","👤"]
  ];
  const [name, icon] = enemies[Math.max(0, Math.min(9, floor - 1))];
  const depth = state.expedition.depth || state.expeditionDepth || 1;
  const health = Math.max(30, Math.floor(stats().attack * (2.4 + floor * .55) * Math.pow(1.8, depth - 1)));
  return { name, icon, health };
}

function expeditionIncomingDamage() {
  const s = stats();
  const base = Math.max(1, Math.floor(s.health * (.04 + state.expedition.floor * .005) - s.defense * .35));
  const depth = state.expedition.depth || state.expeditionDepth || 1;
  return Math.max(1, Math.floor(base * Math.pow(1.35, depth - 1) * Math.max(.25, 1 - (state.expedition.buffs.guard || 0) * .15)));
}

function expeditionEntryCost() { return Math.floor(Math.max(250000 * Math.pow(state.expeditionDepth, 2), clickValue() * 25 * state.expeditionDepth)); }
function relicCraftCost() { return 15 + Object.values(state.relics || {}).reduce((sum, level) => sum + Number(level || 0), 0) * 3; }

function renderRelics() {
  const cost = relicCraftCost();
  $("#craftRelic").disabled = state.expedition.active || state.relicShards < cost || RELICS.every(item => (state.relics[item.id] || 0) >= 5);
  $("#craftRelic").innerHTML = state.expedition.active ? "원정 중 제작 불가" : `🔮 <span id="relicCraftCost">${format(cost)}</span>개로 유물 제작`;
  $("#relicList").innerHTML = RELICS.map(item => {
    const level = state.relics[item.id] || 0;
    const equipped = state.equippedRelics.includes(item.id);
    return `<article class="relic-card ${equipped ? "equipped" : ""} ${level ? "" : "locked"}"><span>${level ? item.icon : "❔"}</span><div><b>${level ? item.name : "미발견 유물"}${level ? ` Lv.${level}` : ""}</b><small>${level ? `${item.effect} +${level * item.per}%` : "심연 유물 공방에서 제작"}</small></div><button data-action="toggle-relic" data-id="${item.id}" ${!level || state.expedition.active ? "disabled" : ""}>${equipped ? "장착 해제" : "장착"}</button></article>`;
  }).join("");
  $("#relicSlots").textContent = `${state.equippedRelics.length} / 2 장착`;
}

function craftRelic() {
  const cost = relicCraftCost();
  const candidates = RELICS.filter(item => (state.relics[item.id] || 0) < 5);
  if (state.expedition.active || state.relicShards < cost || !candidates.length) return;
  state.relicShards -= cost;
  const item = candidates[Math.floor(Math.random() * candidates.length)];
  state.relics[item.id] = (state.relics[item.id] || 0) + 1;
  if (state.equippedRelics.length < 2 && !state.equippedRelics.includes(item.id)) state.equippedRelics.push(item.id);
  saveGame(false);
  renderExpedition();
  render();
  showToast(`${item.icon} ${item.name} Lv.${state.relics[item.id]} 제작!`);
}

function toggleRelic(id) {
  if (state.expedition.active || !state.relics[id]) return;
  const index = state.equippedRelics.indexOf(id);
  if (index >= 0) state.equippedRelics.splice(index, 1);
  else {
    if (state.equippedRelics.length >= 2) return showToast("유물은 최대 2개까지 장착할 수 있습니다.");
    state.equippedRelics.push(id);
  }
  saveGame(false);
  renderExpedition();
  render();
}

function renderExpedition() {
  const run = state.expedition;
  const enemy = expeditionEnemy();
  const maxHp = expeditionMaxHp();
  $("#expeditionFloor").textContent = run.active ? `${run.floor} / 10층` : "대기 중";
  $("#expeditionBest").textContent = `${state.expeditionBest}층`;
  $("#expeditionDepth").textContent = `심도 ${run.active ? run.depth : state.expeditionDepth}`;
  $("#expeditionShards").textContent = format(state.relicShards);
  $("#expeditionEnemyIcon").textContent = run.active ? enemy.icon : "🌀";
  $("#expeditionEnemyName").textContent = run.active ? enemy.name : "심연의 문";
  const playerHp = run.active ? Math.max(0, run.playerHp) : maxHp;
  const enemyHp = run.active ? Math.max(0, run.enemyHp) : enemy.health;
  $("#expeditionPlayerHpBar").style.width = `${Math.min(100, playerHp / maxHp * 100)}%`;
  $("#expeditionPlayerHpText").textContent = `${format(playerHp)} / ${format(maxHp)}`;
  $("#expeditionEnemyHpBar").style.width = `${Math.min(100, enemyHp / enemy.health * 100)}%`;
  $("#expeditionEnemyHpText").textContent = run.active ? `${format(enemyHp)} / ${format(enemy.health)}` : "도전 전";
  const buffs = EXPEDITION_BUFFS.filter(buff => run.buffs[buff.id]).map(buff => `${buff.icon} ${buff.name} ${run.buffs[buff.id] > 1 ? `×${run.buffs[buff.id]}` : ""}`);
  $("#expeditionBuffs").innerHTML = buffs.length ? buffs.map(text => `<span>${text}</span>`).join("") : "<small>아직 획득한 원정 효과가 없습니다.</small>";
  $("#expeditionLog").textContent = run.active ? (run.awaitingChoice ? `${run.floor}층 돌파! 다음 층에 가져갈 힘을 고르세요.` : `심도 ${run.depth} · ${enemy.name}와 자동 전투 중입니다. 창을 닫으면 일시정지됩니다.`) : `심도 ${state.expeditionDepth} 도전. 클리어할 때마다 적과 보상이 강해지며 입장 골드가 필요합니다.`;
  $("#expeditionChoices").hidden = !run.awaitingChoice;
  $("#expeditionChoices").innerHTML = (run.choices || []).map(id => {
    const buff = EXPEDITION_BUFFS.find(item => item.id === id);
    return `<button data-action="choose-expedition" data-id="${id}"><span>${buff.icon}</span><b>${buff.name}</b><small>${buff.text}</small></button>`;
  }).join("");
  $("#expeditionAction").hidden = run.awaitingChoice;
  const entryCost = expeditionEntryCost();
  $("#expeditionAction").dataset.cost = String(entryCost);
  $("#expeditionAction").dataset.locked = String(run.active);
  $("#expeditionAction").disabled = run.active || state.money < entryCost;
  $("#expeditionAction").textContent = run.active ? "⚔ 자동 전투 중" : `🌀 심도 ${state.expeditionDepth} 시작 · ${format(entryCost)}원`;
  $("#expeditionAbandon").hidden = !run.active;
  renderRelics();
}

function startExpedition() {
  if (state.expedition.active) return;
  const entryCost = expeditionEntryCost();
  if (!spend(entryCost)) return showToast(`원정 입장에 ${format(entryCost)}원이 필요합니다.`);
  if (battle.active) stopBattle("심연 원정을 시작해 일반 사냥이 중단되었습니다.");
  state.expedition = { active: true, depth: state.expeditionDepth, floor: 1, buffs: { power: 0, vitality: 0, guard: 0, crit: 0, fortune: 0 }, playerHp: stats().health, enemyHp: 0, awaitingChoice: false, choices: [] };
  state.expedition.enemyHp = expeditionEnemy(1).health;
  saveGame(false);
  renderExpedition();
}

function expeditionReward(completed, victory = false) {
  if (completed <= 0) return 0;
  const base = (completed + (victory ? 5 : 0)) * (1 + ((state.expedition.depth || 1) - 1) * .75);
  return Math.max(1, Math.floor(base * (1 + (state.expedition.buffs.fortune || 0) * .25) * (1 + (state.village.guild || 0) * .1) * (1 + relicLevel("map") * .2)));
}

function finishExpedition(victory, abandoned = false) {
  const completed = victory ? 10 : Math.max(0, state.expedition.floor - 1);
  const reward = expeditionReward(completed, victory);
  state.expeditionBest = Math.max(state.expeditionBest, completed);
  state.relicShards += reward;
  if (victory) state.expeditionDepth = Math.max(state.expeditionDepth, (state.expedition.depth || 1) + 1);
  state.expedition.active = false;
  state.expedition.awaitingChoice = false;
  state.expedition.choices = [];
  saveGame(false);
  renderExpedition();
  renderMore();
  showToast(victory ? `심연 정복! 유물 조각 +${reward}` : `${abandoned ? "원정 철수" : "원정 실패"} · 유물 조각 +${reward}`);
}

function expeditionTurn() {
  const run = state.expedition;
  if (!run.active || run.awaitingChoice) return;
  const s = stats();
  const critChance = Math.min(.9, .05 + s.luck * .002 + (run.buffs.crit || 0) * .1);
  const critical = Math.random() < critChance;
  const damage = Math.max(1, Math.floor(s.attack * (1 + (run.buffs.power || 0) * .25) * (.9 + Math.random() * .2) * (critical ? 2 : 1)));
  run.enemyHp -= damage;
  if (run.enemyHp <= 0) {
    state.expeditionBest = Math.max(state.expeditionBest, run.floor);
    renderMore();
    if (run.floor >= 10) return finishExpedition(true);
    run.enemyHp = 0;
    run.awaitingChoice = true;
    run.choices = [...EXPEDITION_BUFFS].sort(() => Math.random() - .5).slice(0, 3).map(buff => buff.id);
    saveGame(false);
    return renderExpedition();
  }
  run.playerHp -= expeditionIncomingDamage();
  if (run.playerHp <= 0) {
    run.playerHp = 0;
    return finishExpedition(false);
  }
  renderExpedition();
}

function chooseExpeditionBuff(id) {
  const run = state.expedition;
  if (!run.active || !run.awaitingChoice || !run.choices.includes(id)) return;
  if (id === "recovery") {
    run.playerHp = Math.min(expeditionMaxHp(), run.playerHp + expeditionMaxHp() * .35);
  } else if (id === "vitality") {
    const oldMax = expeditionMaxHp();
    run.buffs.vitality = (run.buffs.vitality || 0) + 1;
    run.playerHp += expeditionMaxHp() - oldMax;
  } else {
    run.buffs[id] = (run.buffs[id] || 0) + 1;
  }
  run.floor++;
  run.enemyHp = expeditionEnemy(run.floor).health;
  run.awaitingChoice = false;
  run.choices = [];
  saveGame(false);
  renderExpedition();
}

function renderGemStore() {
  const list = gemStoreTab === "purchase" ? DATA.gemPackages : DATA.gemShop;
  $("#gemStoreList").innerHTML = list.map(item => {
    if (gemStoreTab === "purchase") {
      const claimed = state.claimedGemPackages[item.id];
      return `<article class="gem-product"><span class="gem-icon">${item.icon}</span>${claimed ? "<em>구매 완료</em>" : item.bonus ? `<em>${item.bonus}</em>` : ""}<b>${item.name}</b><small>💎 ${format(item.gems)}개 즉시 지급 · 1회 한정</small><button data-action="buy-gems" data-id="${item.id}" ${claimed ? "disabled" : ""}>${claimed ? "지급 완료" : item.won.toLocaleString("ko-KR") + "원"}</button></article>`;
    }
    const owned = item.unique && state.gemUpgrades[item.id];
    return `<article class="gem-product"><span class="gem-icon">${item.icon}</span>${owned ? "<em>구매 완료</em>" : ""}<b>${item.name}</b><small>${item.effect}</small><button data-action="buy-gem-item" data-id="${item.id}" data-gem-cost="${item.cost}" ${owned || state.gems < item.cost ? "disabled" : ""}>${owned ? "보유 중" : `💎 ${format(item.cost)}`}</button></article>`;
  }).join("");
}

function render() {
  renderQueued = false;
  renderTop();
  renderClickUpgrades();
  renderJobs();
  renderTraining();
  renderGear();
  renderHunt();
  renderMore();
}

function refreshAffordability() {
  $$('[data-cost]').forEach(button => {
    const locked = button.dataset.locked === "true";
    button.disabled = locked || state.money < Number(button.dataset.cost || 0);
  });
  $$('[data-gem-cost]').forEach(button => {
    if (button.textContent === "보유 중") return;
    button.disabled = state.gems < Number(button.dataset.gemCost || 0);
  });
  $$('[data-village-cost]').forEach(button => {
    if (button.textContent === "완공") return;
    button.disabled = state.money < Number(button.dataset.villageCost || 0) || totalMaterials() < Number(button.dataset.materialCost || 0);
  });
}

function queueRender() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(render);
}

function buyClick(id) {
  const item = getItem("clickUpgrades", id);
  const count = state.clickLevels[id] || 0;
  const price = priceOf(item.price, count, CLICK_PRICE_GROWTH);
  if (!spend(price)) return;
  state.clickLevels[id] = count + 1;
  showToast(`${item.name} 완료! 클릭 수익이 늘었습니다.`);
  render();
}

function buyJob(id) {
  const job = getItem("jobs", id);
  const count = state.jobs[id] || 0;
  const price = priceOf(job.price, count, JOB_PRICE_GROWTH);
  if (!spend(price)) return;
  state.jobs[id] = count + 1;
  showToast(`${job.name} ${count + 1}개째 고용!`);
  render();
}

function buyTraining(id) {
  const item = getItem("training", id);
  const count = state.training[id] || 0;
  const price = trainingPrice(item, count);
  if (!spend(price)) return;
  state.training[id] = count + 1;
  showToast(`${item.name} 완료! ${item.label.split(" +")[0]} +${format(trainingGain(item, count))}`);
  render();
}

function spendPoint(id) {
  if (state.statPoints < 1) return;
  state.statPoints--;
  state.pointStats[id] = (state.pointStats[id] || 0) + 1;
  render();
}

function buyGear(id) {
  const item = getItem(shopCategory, id);
  const slot = { weapons: "weapon", armors: "armor", accessories: "accessory" }[shopCategory];
  if (!state.owned[shopCategory].includes(id)) {
    if (!spend(item.price)) return;
    state.owned[shopCategory].push(id);
    showToast(`${item.name} 구매 완료!`);
  } else {
    showToast(`${item.name} 장착!`);
  }
  state.equipped[slot] = id;
  if (battle.active) stopBattle("장비를 바꿔 사냥이 중단되었습니다.");
  render();
}

function enhance(slot) {
  const id = state.equipped[slot];
  if (!id) return showToast("먼저 장비를 장착하세요.");
  const category = slot === "weapon" ? "weapons" : slot === "armor" ? "armors" : "accessories";
  const item = getItem(category, id);
  const current = enhancement(id);
  if (current >= MAX_ENHANCEMENT) return showToast("최고 강화 단계입니다!");
  const next = current + 1;
  const cost = enhanceCost(item, next);
  if (!spend(cost)) return showToast(`강화에 ${format(cost)}원이 필요합니다.`);
  state.lifetimeEnhances++;
  const chance = enhanceChance(next, id);
  if (Math.random() <= chance) {
    state.enhancements[id] = next;
    state.enhancePity[id] = 0;
    const breakthrough = next === 10 || next === 20 || next === 30;
    showToast(`${breakthrough ? "돌파 성공!" : "성공!"} ${item.name} +${next}`);
    playEnhanceFx(true, item.name, next);
  } else {
    state.enhancePity[id] = enhancePity(id) + 1;
    showToast(`강화 실패… 다음 성공률 +${state.enhancePity[id] * 5}%`);
    playEnhanceFx(false, item.name, current);
  }
  if (battle.active) stopBattle("강화로 사냥이 중단되었습니다.");
  render();
}

function playEnhanceFx(success, itemName, level) {
  const fx = $("#enhanceFx");
  fx.className = `enhance-fx ${success ? "success" : "fail"}`;
  $("#enhanceFxIcon").textContent = success ? "✨" : "💥";
  $("#enhanceFxTitle").textContent = success ? `강화 성공! +${level}` : "강화 실패";
  $("#enhanceFxText").textContent = success ? `${itemName}의 힘이 상승했습니다` : `${itemName}의 강화 단계는 유지됩니다`;
  fx.hidden = false;
  if (success) $(".equipped-card").classList.add("equip-success");
  else $(".app-shell").classList.add("screen-shake");
  clearTimeout(playEnhanceFx.timer);
  playEnhanceFx.timer = setTimeout(() => {
    fx.hidden = true;
    $(".equipped-card").classList.remove("equip-success");
    $(".app-shell").classList.remove("screen-shake");
  }, 950);
}

function startBattle() {
  if (!monsterUnlocked(state.selectedZone, state.selectedMonster)) return;
  const s = stats();
  battle = { active: true, playerHp: s.health, monsterHp: currentMonster().health, elapsed: 0 };
  $("#battleLog").textContent = `${currentMonster().name}에게 덤볐다!`;
  updateBattleUi();
}

function stopBattle(message = "사냥을 중단했습니다.") {
  battle.active = false;
  battle.elapsed = 0;
  $("#battleLog").textContent = message;
  updateBattleUi();
}

function updateBattleUi() {
  const s = stats();
  const monster = currentMonster();
  $("#playerHpBar").style.width = `${Math.max(0, battle.playerHp / s.health * 100)}%`;
  $("#playerHpText").textContent = `${format(battle.playerHp)} / ${format(s.health)}`;
  $("#monsterHpBar").style.width = `${Math.max(0, battle.monsterHp / monster.health * 100)}%`;
  $("#monsterHpText").textContent = `${format(battle.monsterHp)} / ${format(monster.health)}`;
  $("#battleButton").textContent = battle.active ? "■ 사냥 중지" : "⚔ 사냥 시작";
}

function battleTurn() {
  if (!battle.active) return;
  const s = stats();
  const monster = currentMonster();
  const critChance = Math.min(.75, .05 + s.luck * .002);
  const critical = Math.random() < critChance;
  let damage = Math.max(1, Math.floor(s.attack * (.9 + Math.random() * .2) * (critical ? 2 : 1)));
  battle.monsterHp -= damage;
  const monsterEl = $("#monsterSprite");
  monsterEl.style.transform = "translateX(8px) scale(.92)";
  setTimeout(() => monsterEl.style.transform = "", 130);
  if (battle.monsterHp <= 0) {
    winBattle(monster, damage, critical);
    return;
  }
  const incoming = Math.max(1, Math.floor(monster.attack - s.defense));
  battle.playerHp -= incoming;
  const heroEl = $(".hero-sprite");
  heroEl.style.transform = "translateX(-8px) scale(.94)";
  setTimeout(() => heroEl.style.transform = "", 130);
  $("#battleLog").textContent = `${critical ? "치명타! " : ""}${format(damage)} 피해 · ${format(incoming)} 피해를 받음`;
  if (battle.playerHp <= 0) {
    battle.active = false;
    battle.playerHp = 0;
    $("#battleLog").textContent = `패배… 하지만 잃은 것은 없습니다. 잠시 쉬면 회복됩니다.`;
    showToast("사냥 실패! 장비나 스탯을 강화해 보세요.");
  }
  updateBattleUi();
}

function winBattle(monster, damage, critical) {
  const reward = Math.floor(monster.reward * rewardMultiplier());
  earn(reward);
  state.kills[monster.id] = (state.kills[monster.id] || 0) + 1;
  state.lifetimeKills++;
  state.runKills++;
  state.discovered[monster.id] = true;
  const unlockProgressChanged = state.kills[monster.id] <= monster.unlock;
  state.materials[monster.material] = (state.materials[monster.material] || 0) + 1;
  if (monster.id === "miniDemon") state.miniDemonKills++;
  gainXp(monster.xp);
  const zone = DATA.zones[state.selectedZone];
  const lastMonster = zone.monsters[zone.monsters.length - 1];
  if (monster.id === lastMonster.id && state.kills[monster.id] >= monster.unlock && state.selectedZone < DATA.zones.length - 1 && state.unlockedZone === state.selectedZone) {
    state.unlockedZone++;
    showToast(`새 지역 해금: ${DATA.zones[state.unlockedZone].name}!`);
  } else {
    showToast(`${monster.name} 처치! +${format(reward)}원`);
  }
  $("#battleLog").textContent = `${critical ? "치명타로 " : ""}${monster.name} 처치! ${monster.material} 획득`;
  battle.monsterHp = monster.health;
  battle.playerHp = stats().health;
  battle.elapsed = 0;
  saveGame(false);
  renderTop();
  if (unlockProgressChanged && document.querySelector('.screen.active')?.dataset.screen === "hunt") renderHunt();
  else updateBattleUi();
}

function gainXp(amount) {
  state.xp += amount;
  while (state.xp >= xpNeeded()) {
    state.xp -= xpNeeded();
    state.level++;
    state.statPoints += 3;
    showToast(`레벨 업! Lv.${state.level} · 스탯 포인트 +3`);
  }
}

function prestigeReward() {
  if (!state.miniDemonKills) return 0;
  return Math.max(1, state.worldTier + Math.floor(Math.sqrt(Math.min(25, state.miniDemonKills)) * 2) + Math.floor(Math.log10(Math.max(1, state.totalEarned)) / 4));
}

function prestige(nextContractId) {
  if (!state.miniDemonKills || !LIFE_CONTRACTS.some(item => item.id === nextContractId)) return;
  const reward = prestigeReward();
  const souls = state.souls + reward;
  const gems = state.gems;
  const blessings = { ...state.blessings };
  const gemUpgrades = { ...state.gemUpgrades };
  const claimedGemPackages = { ...state.claimedGemPackages };
  const claimedChallenges = { ...state.claimedChallenges };
  const discovered = { ...state.discovered };
  const village = { ...state.village };
  const relicShards = state.relicShards;
  const expeditionBest = state.expeditionBest;
  const expeditionDepth = state.expeditionDepth;
  const relics = { ...state.relics };
  const equippedRelics = [...state.equippedRelics];
  const legacyUpgrades = { ...state.legacyUpgrades };
  const completedContracts = { ...state.completedContracts };
  const completed = contractComplete();
  if (completed && state.activeContract) completedContracts[state.activeContract] = (completedContracts[state.activeContract] || 0) + 1;
  const legacyMarks = state.legacyMarks + (completed ? state.worldTier : 0);
  const worldTier = state.worldTier + (completed ? 1 : 0);
  const lifetime = { clicks: state.lifetimeClicks, kills: state.lifetimeKills, enhances: state.lifetimeEnhances, earned: state.lifetimeEarned };
  const prestigeCount = state.prestigeCount + 1;
  state = freshState();
  state.souls = souls;
  state.gems = gems;
  state.blessings = blessings;
  state.gemUpgrades = gemUpgrades;
  state.claimedGemPackages = claimedGemPackages;
  state.claimedChallenges = claimedChallenges;
  state.discovered = discovered;
  state.village = village;
  state.relicShards = relicShards;
  state.expeditionBest = expeditionBest;
  state.expeditionDepth = expeditionDepth;
  state.relics = relics;
  state.equippedRelics = equippedRelics;
  state.legacyUpgrades = legacyUpgrades;
  state.completedContracts = completedContracts;
  state.legacyMarks = legacyMarks;
  state.worldTier = worldTier;
  state.activeContract = nextContractId;
  state.lifetimeClicks = lifetime.clicks;
  state.lifetimeKills = lifetime.kills;
  state.lifetimeEnhances = lifetime.enhances;
  state.lifetimeEarned = lifetime.earned;
  state.prestigeCount = prestigeCount;
  battle.active = false;
  saveGame(false);
  closeContractSheet();
  const chosen = LIFE_CONTRACTS.find(item => item.id === nextContractId);
  showToast(`${chosen.name} 시작! 영혼석 +${reward}${completed ? ` · 인장 +${worldTier - 1}` : ""}`);
  switchScreen("earn");
  render();
}

function buyBlessing(id) {
  const level = state.blessings[id] || 0;
  const price = level + 1;
  if (state.souls < price) return;
  state.souls -= price;
  state.blessings[id] = level + 1;
  showToast("영혼의 축복이 강해졌습니다.");
  render();
}

function claimChallenge(id) {
  const item = getItem("challenges", id);
  if (!item || state.claimedChallenges[id] || challengeValue(item) < item.target) return;
  state.claimedChallenges[id] = true;
  if (item.reward.gold) earn(item.reward.gold);
  if (item.reward.gems) state.gems += item.reward.gems;
  if (item.reward.souls) state.souls += item.reward.souls;
  showToast(`${item.name} 달성! ${challengeRewardText(item.reward)} 획득`);
  saveGame(false);
  renderTop();
  renderMore();
}

function buyGems(id) {
  const pack = getItem("gemPackages", id);
  if (!pack || state.claimedGemPackages[id]) return;
  state.claimedGemPackages[id] = true;
  state.gems += pack.gems;
  showToast(`${pack.won.toLocaleString("ko-KR")}원 결제 테스트 완료! 보석 +${format(pack.gems)}`);
  saveGame(false);
  renderTop();
  renderMore();
}

function buyGemItem(id) {
  const item = getItem("gemShop", id);
  if (!item || (item.unique && state.gemUpgrades[id]) || state.gems < item.cost) return;
  state.gems -= item.cost;
  if (item.unique) {
    state.gemUpgrades[id] = true;
  } else if (id === "timeWarp") {
    const reward = Math.max(clickValue() * 100, baseIncome() * incomeMultiplier() * 600);
    earn(reward);
    showToast(`시간 가속! +${format(reward)}원`);
  } else if (id === "goldChest") {
    const reward = clickValue() * 300;
    earn(reward);
    showToast(`황금 금고 개봉! +${format(reward)}원`);
  }
  if (item.unique) showToast(`${item.name} 구매 완료! 영구 효과가 적용됩니다.`);
  if (battle.active && item.id === "heroSeal") stopBattle("새 영구 효과 적용으로 사냥이 중단되었습니다.");
  saveGame(false);
  render();
}

function switchScreen(target) {
  $$(".screen").forEach(screen => screen.classList.toggle("active", screen.dataset.screen === target));
  $$(".bottom-nav button").forEach(button => button.classList.toggle("active", button.dataset.target === target));
  renderTop();
  ({ earn: () => { renderClickUpgrades(); renderJobs(); }, growth: renderTraining, hunt: renderHunt, gear: renderGear, more: renderMore })[target]?.();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveGame(notify = true) {
  state.lastSave = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  if (notify) showToast("진행 상황을 저장했습니다.");
}

function hydrateSave(parsed, includeOffline = false) {
  const base = freshState();
  const merged = { ...base, ...parsed };
  const incomingVersion = Number(parsed.balanceVersion || 0);
  merged.balanceVersion = 9;
  ["clickLevels","jobs","training","pointStats","enhancements","enhancePity","blessings","gemUpgrades","legacyUpgrades","relics","completedContracts","claimedGemPackages","claimedChallenges","discovered","kills","materials","equipped"].forEach(key => merged[key] = { ...base[key], ...(parsed[key] || {}) });
  merged.owned = { ...base.owned, ...(parsed.owned || {}) };
  merged.village = { ...base.village, ...(parsed.village || {}) };
  merged.expedition = { ...base.expedition, ...(parsed.expedition || {}) };
  merged.expedition.buffs = { ...base.expedition.buffs, ...(parsed.expedition?.buffs || {}) };
  merged.expedition.choices = Array.isArray(parsed.expedition?.choices) ? parsed.expedition.choices.filter(id => EXPEDITION_BUFFS.some(buff => buff.id === id)).slice(0, 3) : [];
  VILLAGE_BUILDINGS.forEach(building => { merged.village[building.id] = Math.max(0, Math.min(5, Math.floor(Number(merged.village[building.id]) || 0))); });
  merged.relicShards = Math.max(0, Math.floor(Number(merged.relicShards) || 0));
  merged.legacyMarks = Math.max(0, Math.floor(Number(merged.legacyMarks) || 0));
  merged.worldTier = Math.max(1, Math.floor(Number(parsed.worldTier ?? 1) || 1));
  if (incomingVersion < 8 && !Object.values(merged.completedContracts).some(count => Number(count) > 0)) merged.worldTier = 1;
  merged.activeContract = LIFE_CONTRACTS.some(item => item.id === merged.activeContract) ? merged.activeContract : null;
  merged.equippedRelics = Array.isArray(parsed.equippedRelics) ? parsed.equippedRelics.filter(id => RELICS.some(item => item.id === id) && (merged.relics[id] || 0) > 0).slice(0, 2) : [];
  LEGACY_UPGRADES.forEach(item => { merged.legacyUpgrades[item.id] = Math.max(0, Math.min(10, Math.floor(Number(merged.legacyUpgrades[item.id]) || 0))); });
  RELICS.forEach(item => { merged.relics[item.id] = Math.max(0, Math.min(5, Math.floor(Number(merged.relics[item.id]) || 0))); });
  merged.expeditionBest = Math.max(0, Math.min(10, Math.floor(Number(merged.expeditionBest) || 0)));
  merged.expeditionDepth = Math.max(1, Math.min(100, Math.floor(Number(parsed.expeditionDepth ?? (merged.expeditionBest >= 10 ? 2 : 1)) || 1)));
  merged.expedition.depth = Math.max(1, Math.min(100, Math.floor(Number(merged.expedition.depth) || merged.expeditionDepth)));
  merged.expedition.floor = Math.max(1, Math.min(10, Math.floor(Number(merged.expedition.floor) || 1)));
  merged.expedition.playerHp = Math.max(0, Number(merged.expedition.playerHp) || 0);
  merged.expedition.enemyHp = Math.max(0, Number(merged.expedition.enemyHp) || 0);
  if (merged.expedition.active && (!merged.expedition.playerHp || !merged.expedition.enemyHp)) merged.expedition.active = false;
  if (!merged.expedition.active) {
    merged.expedition.floor = 1;
    merged.expedition.enemyHp = 0;
    merged.expedition.awaitingChoice = false;
    merged.expedition.choices = [];
  }
  const validGear = {
    weapons: new Set(DATA.weapons.map(item => item.id)),
    armors: new Set(DATA.armors.map(item => item.id)),
    accessories: new Set(DATA.accessories.map(item => item.id))
  };
  Object.keys(validGear).forEach(category => { merged.owned[category] = (merged.owned[category] || []).filter(id => validGear[category].has(id)); });
  if (!validGear.weapons.has(merged.equipped.weapon)) merged.equipped.weapon = null;
  if (!validGear.armors.has(merged.equipped.armor)) merged.equipped.armor = null;
  if (!validGear.accessories.has(merged.equipped.accessory)) merged.equipped.accessory = null;
  const allGearIds = new Set([...validGear.weapons, ...validGear.armors, ...validGear.accessories]);
  Object.keys(merged.enhancements).forEach(id => {
    if (!allGearIds.has(id)) delete merged.enhancements[id];
    else merged.enhancements[id] = Math.max(0, Math.min(MAX_ENHANCEMENT, Math.floor(Number(merged.enhancements[id]) || 0)));
  });
  Object.keys(merged.enhancePity).forEach(id => {
    if (!allGearIds.has(id)) delete merged.enhancePity[id];
    else merged.enhancePity[id] = Math.max(0, Math.floor(Number(merged.enhancePity[id]) || 0));
  });
  merged.unlockedZone = Math.max(0, Math.min(DATA.zones.length - 1, Number(merged.unlockedZone) || 0));
  merged.selectedZone = Math.max(0, Math.min(merged.unlockedZone, Number(merged.selectedZone) || 0));
  merged.selectedMonster = Math.max(0, Math.min(DATA.zones[merged.selectedZone].monsters.length - 1, Number(merged.selectedMonster) || 0));
  if (parsed.lifetimeEarned == null) merged.lifetimeEarned = Number(parsed.totalEarned || 0);
  if (parsed.prestigeCount == null && (Number(parsed.souls || 0) > 0 || Object.values(parsed.blessings || {}).some(Number))) merged.prestigeCount = 1;
  Object.entries(merged.kills).forEach(([id,count]) => { if (count > 0) merged.discovered[id] = true; });
  if (merged.prestigeCount > 0) DATA.zones.slice(0,3).flatMap(zone => zone.monsters).forEach(monster => { merged.discovered[monster.id] = true; });
  if (includeOffline) {
    const away = Math.min((8 + merged.village.inn) * 3600, Math.max(0, (Date.now() - (parsed.lastSave || Date.now())) / 1000));
    let offlineIncome = DATA.jobs.reduce((sum, job) => sum + masteryTotal(job.income, merged.jobs[job.id] || 0, JOB_MASTERY_STEP, JOB_MASTERY_MULTIPLIER), 0);
    if (merged.gemUpgrades.businessLicense) offlineIncome *= 1.5;
    if (merged.equippedRelics.includes("clock")) offlineIncome *= 1 + (merged.relics.clock || 0) * .15;
    if (merged.activeContract === "tycoon") offlineIncome *= 2.5;
    let offlineMultiplier = 1 + (merged.blessings.money || 0) * .1;
    const accessory = DATA.accessories.find(item => item.id === merged.equipped.accessory);
    if (accessory?.income) offlineMultiplier += accessory.income * (1 + (merged.enhancements[accessory.id] || 0) * .05);
    offlineMultiplier *= 1 + (merged.legacyUpgrades.fortune || 0) * .1;
    const offline = away * offlineIncome * offlineMultiplier * (1 + merged.village.inn * .05);
    if (offline >= 1) {
      merged.money += offline;
      merged.totalEarned += offline;
      merged.lifetimeEarned += offline;
      merged.runEarned += offline;
      setTimeout(() => showToast(`쉬는 동안 ${format(offline)}원을 벌었습니다!`), 500);
    }
  }
  return merged;
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw && !localStorage.getItem(BACKUP_SAVE_KEY)) localStorage.setItem(BACKUP_SAVE_KEY, raw);
    const parsed = JSON.parse(raw);
    if (!parsed) return freshState();
    return hydrateSave(parsed, true);
  } catch { return freshState(); }
}

function saveManualGame() {
  state.lastSave = Date.now();
  localStorage.setItem(MANUAL_SAVE_KEY, JSON.stringify(state));
  saveGame(false);
  showToast("현재 진행 상황을 세이브 슬롯에 저장했습니다.");
}

function loadManualGame() {
  try {
    const parsed = JSON.parse(localStorage.getItem(MANUAL_SAVE_KEY));
    if (!parsed) return showToast("불러올 세이브가 없습니다.");
    battle.active = false;
    state = hydrateSave(parsed, false);
    saveGame(false);
    render();
    showToast("저장했던 진행 상황을 불러왔습니다.");
  } catch { showToast("세이브를 불러오지 못했습니다."); }
}

function restoreBackupGame() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVE_CODE_ROLLBACK_KEY) || localStorage.getItem(BACKUP_SAVE_KEY));
    if (!parsed) return showToast("복구할 안전 백업이 없습니다.");
    battle.active = false;
    state = hydrateSave(parsed, false);
    saveGame(false);
    render();
    showToast("이전 안전 백업을 복구했습니다.");
  } catch { showToast("안전 백업을 복구하지 못했습니다."); }
}

function setSaveCodeStatus(message, type = "") {
  const status = $("#saveCodeStatus");
  status.textContent = message;
  status.className = `cloud-status ${type}`;
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return ((crc ^ 0xffffffff) >>> 0).toString(16).padStart(8, "0");
}

function bytesToBase64Url(bytes) {
  let binary = "";
  for (let index = 0; index < bytes.length; index += 0x8000) binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlToBytes(value) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(base64);
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}

async function compressBytes(bytes) {
  if (typeof CompressionStream === "undefined" || typeof DecompressionStream === "undefined") return { mode: "J", bytes };
  const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream("deflate"));
  return { mode: "Z", bytes: new Uint8Array(await new Response(stream).arrayBuffer()) };
}

async function decompressBytes(mode, bytes) {
  if (mode === "J") return bytes;
  if (mode !== "Z" || typeof DecompressionStream === "undefined") throw new Error("이 브라우저에서는 압축 세이브 코드를 읽을 수 없습니다.");
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function generateSaveCode() {
  const button = $("#generateSaveCode");
  button.disabled = true;
  setSaveCodeStatus("현재 상태를 코드로 만드는 중…");
  try {
    state.lastSave = Date.now();
    saveGame(false);
    const envelope = { game: "beggar-hero", format: 4, issuedAt: Date.now(), state };
    const source = new TextEncoder().encode(JSON.stringify(envelope));
    const packed = await compressBytes(source);
    const code = `BH4${packed.mode}.${bytesToBase64Url(packed.bytes)}.${crc32(packed.bytes)}`;
    $("#saveCodeOutput").value = code;
    $("#saveCodeLength").textContent = `${code.length.toLocaleString("ko-KR")}자 · ${new Date().toLocaleString("ko-KR")} 발급`;
    $("#copySaveCode").disabled = false;
    setSaveCodeStatus("최신 상태로 세이브 코드를 발급했습니다.", "success");
  } catch { setSaveCodeStatus("세이브 코드 발급에 실패했습니다.", "error"); }
  finally { button.disabled = false; }
}

async function copySaveCode() {
  const output = $("#saveCodeOutput");
  if (!output.value) return;
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(output.value);
    else { output.select(); document.execCommand("copy"); }
    setSaveCodeStatus("세이브 코드를 복사했습니다.", "success");
  } catch {
    output.select();
    const copied = document.execCommand("copy");
    setSaveCodeStatus(copied ? "세이브 코드를 복사했습니다." : "자동 복사가 막혔습니다. 선택된 코드를 직접 복사하세요.", copied ? "success" : "error");
  }
}

async function loadFromSaveCode() {
  const button = $("#loadSaveCode");
  const code = $("#saveCodeInput").value.replace(/\s+/g, "");
  if (!code) return setSaveCodeStatus("불러올 세이브 코드를 입력하세요.", "error");
  if (code.length > 700000) return setSaveCodeStatus("세이브 코드가 너무 큽니다.", "error");
  button.disabled = true;
  setSaveCodeStatus("코드를 확인하는 중…");
  try {
    const match = code.match(/^BH4([ZJ])\.([A-Za-z0-9_-]+)\.([0-9a-fA-F]{8})$/);
    if (!match) throw new Error("올바른 무한 거지 용사 세이브 코드가 아닙니다.");
    const packed = base64UrlToBytes(match[2]);
    if (crc32(packed) !== match[3].toLowerCase()) throw new Error("코드가 일부 손상되었거나 잘못 복사되었습니다.");
    const source = await decompressBytes(match[1], packed);
    const envelope = JSON.parse(new TextDecoder().decode(source));
    if (envelope?.game !== "beggar-hero" || !envelope.state || typeof envelope.state !== "object" || Array.isArray(envelope.state)) throw new Error("지원하지 않는 세이브 코드입니다.");
    localStorage.setItem(SAVE_CODE_ROLLBACK_KEY, JSON.stringify(state));
    battle.active = false;
    state = hydrateSave(envelope.state, false);
    saveGame(false);
    render();
    setSaveCodeStatus(`불러오기 완료 · Lv.${state.level} · ${format(state.money)}원`, "success");
    showToast("세이브 코드의 진행 상황을 불러왔습니다.");
  } catch (error) { setSaveCodeStatus(error.message || "세이브 코드를 불러오지 못했습니다.", "error"); }
  finally { button.disabled = false; }
}

function spawnEvent() {
  if (eventState || document.hidden) return;
  const type = Math.random() < .75 ? "pig" : "lottery";
  eventState = { type, expires: Date.now() + 10000 };
  $("#eventIcon").textContent = type === "pig" ? "🐷" : "🎟️";
  $("#eventTitle").textContent = type === "pig" ? "황금돼지 출현!" : "수상한 복권 발견!";
  $("#eventText").textContent = type === "pig" ? "10초 안에 눌러 대박 보상" : "행운을 시험해 보세요";
  $("#eventBanner").hidden = false;
  eventTimeout = setTimeout(closeEvent, 10000);
}

function closeEvent() {
  eventState = null;
  clearTimeout(eventTimeout);
  $("#eventBanner").hidden = true;
}

function claimEvent() {
  if (!eventState) return;
  if (eventState.type === "pig") {
    const reward = Math.max(100, baseIncome() * incomeMultiplier() * 300);
    earn(reward);
    showToast(`황금돼지 포획! +${format(reward)}원`);
  } else if (Math.random() < .01) {
    const reward = Math.max(1000, state.money);
    earn(reward);
    showToast("1등 당첨! 현재 돈이 두 배가 됐습니다!");
  } else {
    const reward = Math.max(10, clickValue() * 20);
    earn(reward);
    showToast(`꽝은 아니네요. +${format(reward)}원`);
  }
  closeEvent();
  render();
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]");
  if (action) {
    const id = action.dataset.id;
    const actions = { "buy-click": buyClick, "buy-job": buyJob, "buy-training": buyTraining, "spend-point": spendPoint, "buy-gear": buyGear, "select-monster": selectMonster, "buy-blessing": buyBlessing, "buy-gems": buyGems, "buy-gem-item": buyGemItem, "claim-challenge": claimChallenge, "upgrade-village": upgradeVillage, "choose-expedition": chooseExpeditionBuff, "start-contract": prestige, "buy-legacy": buyLegacy, "toggle-relic": toggleRelic };
    actions[action.dataset.action]?.(id);
  }
});

function selectMonster(index) {
  if (battle.active) stopBattle("상대를 바꿔 사냥이 중단되었습니다.");
  state.selectedMonster = Number(index);
  render();
}

$("#earnButton").addEventListener("click", (event) => {
  state.lifetimeClicks++;
  state.runClicks++;
  const amount = clickValue();
  const lucky = Math.random() < .01;
  earn(lucky ? amount * 10 : amount);
  moneyPop(event.clientX - 25, event.clientY - 10, lucky ? amount * 10 : amount, lucky);
});
$$(".bottom-nav button").forEach(button => button.addEventListener("click", () => switchScreen(button.dataset.target)));
function openSaveCodeSheet() { $("#saveCodeModal").hidden = false; setSaveCodeStatus("코드를 발급하거나 입력하세요."); }
function closeSaveCodeSheet() { $("#saveCodeModal").hidden = true; }
$("#saveButton").addEventListener("click", openSaveCodeSheet);
$("#openSaveCode").addEventListener("click", openSaveCodeSheet);
$("#closeSaveCode").addEventListener("click", closeSaveCodeSheet);
$("#saveCodeModal").addEventListener("click", event => { if (event.target === $("#saveCodeModal")) closeSaveCodeSheet(); });
$("#generateSaveCode").addEventListener("click", generateSaveCode);
$("#copySaveCode").addEventListener("click", copySaveCode);
$("#loadSaveCode").addEventListener("click", loadFromSaveCode);
$("#manualSave").addEventListener("click", saveManualGame);
$("#manualLoad").addEventListener("click", loadManualGame);
$("#restoreBackup").addEventListener("click", restoreBackupGame);
function openProfileSheet() { renderProfile(); $("#profileModal").hidden = false; }
function closeProfileSheet() { $("#profileModal").hidden = true; }
function openCodexSheet() { renderCodex(); $("#codexModal").hidden = false; }
function closeCodexSheet() { $("#codexModal").hidden = true; }
function openExpeditionSheet() { renderExpedition(); $("#expeditionModal").hidden = false; }
function closeExpeditionSheet() { $("#expeditionModal").hidden = true; expeditionElapsed = 0; }
function openVillageSheet() { renderVillage(); $("#villageModal").hidden = false; }
function closeVillageSheet() { $("#villageModal").hidden = true; }
function openContractSheet() { renderContracts(); $("#contractModal").hidden = false; }
function closeContractSheet() { $("#contractModal").hidden = true; }
$("#openProfile").addEventListener("click", openProfileSheet);
$("#openProfileMore").addEventListener("click", openProfileSheet);
$("#closeProfile").addEventListener("click", closeProfileSheet);
$("#openCodex").addEventListener("click", openCodexSheet);
$("#closeCodex").addEventListener("click", closeCodexSheet);
$("#openExpedition").addEventListener("click", openExpeditionSheet);
$("#closeExpedition").addEventListener("click", closeExpeditionSheet);
$("#expeditionAction").addEventListener("click", startExpedition);
$("#expeditionAbandon").addEventListener("click", () => finishExpedition(false, true));
$("#openVillage").addEventListener("click", openVillageSheet);
$("#closeVillage").addEventListener("click", closeVillageSheet);
$("#openContracts").addEventListener("click", openContractSheet);
$("#closeContracts").addEventListener("click", closeContractSheet);
$("#craftRelic").addEventListener("click", craftRelic);
$("#profileModal").addEventListener("click", event => { if (event.target === $("#profileModal")) closeProfileSheet(); });
$("#codexModal").addEventListener("click", event => { if (event.target === $("#codexModal")) closeCodexSheet(); });
$("#expeditionModal").addEventListener("click", event => { if (event.target === $("#expeditionModal")) closeExpeditionSheet(); });
$("#villageModal").addEventListener("click", event => { if (event.target === $("#villageModal")) closeVillageSheet(); });
$("#contractModal").addEventListener("click", event => { if (event.target === $("#contractModal")) closeContractSheet(); });
$("#battleButton").addEventListener("click", () => battle.active ? stopBattle() : startBattle());
$("#prevZone").addEventListener("click", () => { if (state.selectedZone > 0) { stopBattle(); state.selectedZone--; state.selectedMonster = 0; render(); } });
$("#nextZone").addEventListener("click", () => { if (state.selectedZone < state.unlockedZone) { stopBattle(); state.selectedZone++; state.selectedMonster = 0; render(); } });
$("#shopTabs").addEventListener("click", event => {
  const button = event.target.closest("[data-shop]");
  if (!button) return;
  shopCategory = button.dataset.shop;
  $$("#shopTabs button").forEach(el => el.classList.toggle("active", el === button));
  renderGear();
});
$("#gemTabs").addEventListener("click", event => {
  const button = event.target.closest("[data-gem-tab]");
  if (!button) return;
  gemStoreTab = button.dataset.gemTab;
  $$("#gemTabs button").forEach(el => el.classList.toggle("active", el === button));
  renderGemStore();
});
$$('[data-enhance]').forEach(button => button.addEventListener("click", () => enhance(button.dataset.enhance)));
$("#prestigeButton").addEventListener("click", openContractSheet);
$("#eventButton").addEventListener("click", claimEvent);
$("#resetButton").addEventListener("click", () => $("#confirmModal").hidden = false);
$("#cancelReset").addEventListener("click", () => $("#confirmModal").hidden = true);
$("#confirmReset").addEventListener("click", () => {
  localStorage.removeItem(SAVE_KEY);
  localStorage.removeItem(MANUAL_SAVE_KEY);
  state = freshState(); battle.active = false;
  $("#confirmModal").hidden = true;
  switchScreen("earn"); render(); showToast("새로운 빈털터리 인생이 시작됐습니다.");
});

let lastTick = performance.now();
setInterval(() => {
  const now = performance.now();
  const delta = Math.min(1, (now - lastTick) / 1000);
  lastTick = now;
  const passive = baseIncome() * incomeMultiplier() * delta;
  if (passive > 0) {
    state.money += passive;
    state.totalEarned += passive;
    state.lifetimeEarned += passive;
    state.runEarned += passive;
    renderTop();
    refreshAffordability();
  }
  if (battle.active) {
    battle.elapsed += delta;
    if (battle.elapsed >= 1) { battle.elapsed -= 1; battleTurn(); }
  }
  if (state.expedition.active && !state.expedition.awaitingChoice && !$("#expeditionModal").hidden) {
    expeditionElapsed += delta;
    if (expeditionElapsed >= 1) { expeditionElapsed -= 1; expeditionTurn(); }
  }
  if (eventState) $("#eventTimer").style.transform = `scaleX(${Math.max(0, (eventState.expires - Date.now()) / 10000)})`;
}, 100);

setInterval(() => saveGame(false), 10000);
setInterval(() => { if (Math.random() < .6) spawnEvent(); }, 45000);
window.addEventListener("beforeunload", () => saveGame(false));
document.addEventListener("visibilitychange", () => { if (document.hidden) saveGame(false); });

const walletObserver = new IntersectionObserver(([entry]) => {
  const sticky = $("#stickyWallet");
  const visible = !entry.isIntersecting;
  sticky.classList.toggle("show", visible);
  sticky.setAttribute("aria-hidden", String(!visible));
}, { threshold: .05 });
walletObserver.observe($(".wallet"));

render();
