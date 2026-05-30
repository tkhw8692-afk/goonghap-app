export const archetypes = [
  {
    id: "golden_hour",
    name: "The Golden Hour",
    tagline: "따뜻함으로 세상을 설득하는 사람",
    description: "일상의 아름다움을 포착하고 감정적으로 너그러운 타입. 낭만적이고 이상주의적이며 피드 전체가 세상이 좋은 곳이라는 주장처럼 보임.",
    attracted_to: "조용한 강렬함을 가진 사람. 겉은 차분하지만 안에 깊이가 있는 타입. 무언가에 몰두해 있는 사람.",
    attracted_by: "번아웃된 완벽주의자. 오랫동안 제대로 돌봄을 받지 못한 사람. 감정적으로 회피적이지만 결국 무장해제되는 사람.",
    blind_spot: "따뜻함과 깊이를 혼동함. 자신의 에너지를 소모하는 사람과 너무 오래 있으면서 그걸 사랑이라고 합리화함.",
    pull_quote: "당신은 누군가의 집 전체입니다. 그 사람이 아직 문을 열지 않았을 뿐.",
    scoring_weights: {
      CT_WARM: 3, CT_COOL: -2, CT_NEUTRAL: 0, CT_MIXED: 0, CT_HIGH_CON: -1,
      SM_NATURE_DOMESTIC: 2, SM_PEOPLE_INTIMATE: 2, SM_FOOD: 2, SM_PEOPLE_SOCIAL: 1,
      SM_SELF: 0, SM_OBJECTS: -1, SM_TEXT: -1, SM_NATURE_WILD: -1, SM_MOVEMENT: 0, SM_PROCESS: 1,
      CL_HIGH: 0, CL_MEDIUM: 2, CL_LOW: 0, CL_DOCUMENTARY: -1, CL_EXPRESSIVE: 1,
      SF_HIGH_POSED: -2, SF_HIGH_CANDID: 0, SF_MEDIUM: 1, SF_LOW_PRESENT: 1, SF_ABSENT: 0, SF_PORTRAIT_STYLE: 0,
      LS_DOMESTIC: 2, LS_OUTDOOR_CASUAL: 2, LS_OUTDOOR_EXTREME: -1, LS_URBAN_SOCIAL: 0,
      LS_INTELLECTUAL: 0, LS_CREATIVE: 1, LS_FITNESS: 0, LS_TRAVEL: 0, LS_COMMUNITY: 1,
      ER_OPTIMISTIC: 3, ER_EARNEST: 2, ER_CONTEMPLATIVE: -1, ER_ENERGETIC: 1,
      ER_MELANCHOLIC: -2, ER_WIDE_RANGE: 0, ER_IRONIC: -2, ER_RESTRAINED: -1
    }
  },
  {
    id: "dark_library",
    name: "The Dark Library",
    tagline: "유리 뒤에서 사랑하는 사람",
    description: "지적이고 내면적이며 깊이 느끼지만 좀처럼 드러내지 않음. 대부분의 사회적 환경이 약간 피곤하고 책이 더 친밀하게 느껴짐.",
    attracted_to: "요구하지 않는 따뜻함. 아이디어에 진짜 관심이 있으면서도 몸도 있고 그걸 사과하지 않는 사람.",
    attracted_by: "감정적 거리를 깊이로 착각하는 사람들. 표면적 연결을 포기한 깊은 감정의 소유자.",
    blind_spot: "감정적 경험을 지적으로 분석하다가 정작 경험을 못 함. 완전히 이해받기 전까지 친밀함을 허용하지 않음.",
    pull_quote: "쉽게 빠지지 않습니다. 하지만 빠지면 모든 걸 다시 씁니다.",
    scoring_weights: {
      CT_WARM: -2, CT_COOL: 3, CT_NEUTRAL: 1, CT_MIXED: -1, CT_HIGH_CON: 1,
      SM_NATURE_DOMESTIC: -1, SM_PEOPLE_INTIMATE: 0, SM_FOOD: -1, SM_PEOPLE_SOCIAL: -2,
      SM_SELF: -1, SM_OBJECTS: 2, SM_TEXT: 3, SM_NATURE_WILD: 0, SM_ARCHITECTURE: 2, SM_MOVEMENT: -1, SM_PROCESS: 1,
      CL_HIGH: 1, CL_MEDIUM: 0, CL_LOW: -1, CL_DOCUMENTARY: 1, CL_EXPRESSIVE: 2,
      SF_HIGH_POSED: -3, SF_HIGH_CANDID: -1, SF_MEDIUM: -1, SF_LOW_PRESENT: 1, SF_ABSENT: 3, SF_PORTRAIT_STYLE: 2,
      LS_DOMESTIC: 0, LS_OUTDOOR_CASUAL: 0, LS_OUTDOOR_EXTREME: -1, LS_URBAN_SOCIAL: -2,
      LS_INTELLECTUAL: 3, LS_CREATIVE: 2, LS_FITNESS: -1, LS_TRAVEL: 0, LS_COMMUNITY: 0,
      ER_OPTIMISTIC: -2, ER_EARNEST: 1, ER_CONTEMPLATIVE: 3, ER_ENERGETIC: -2,
      ER_MELANCHOLIC: 2, ER_WIDE_RANGE: 0, ER_IRONIC: 0, ER_RESTRAINED: 1
    }
  },
  {
    id: "open_road",
    name: "The Open Road",
    tagline: "움직임이 정체성인 사람",
    description: "도망가는 게 아니라 향해가는 타입. 약간의 불편함 속에서 삶이 더 나아진다고 진심으로 믿음. 모험적이지만 과시하지 않음.",
    attracted_to: "자기 방향이 있고 끌려다니지 않는 사람. 안정적이지만 지루하지 않은 사람. 자신이 접근할 수 없는 고요함.",
    attracted_by: "너무 오래 멈춰 있던 사람. 대리 만족을 원하는 사람. 다른 무버들 — 하지만 그 관계는 착지 없이 궤도를 돔.",
    blind_spot: "존재감을 깊이의 대체제로 씀. 무언가가 정말 어려워지기 전에 떠남.",
    pull_quote: "당신에게 맞는 사람은 동승자가 아니라 목적지입니다.",
    scoring_weights: {
      CT_WARM: 0, CT_COOL: 1, CT_NEUTRAL: 2, CT_MIXED: 1, CT_HIGH_CON: 1,
      SM_NATURE_DOMESTIC: 0, SM_PEOPLE_INTIMATE: 0, SM_FOOD: 0, SM_PEOPLE_SOCIAL: 1,
      SM_SELF: 0, SM_OBJECTS: -1, SM_TEXT: -2, SM_NATURE_WILD: 2, SM_ARCHITECTURE: 0, SM_MOVEMENT: 3, SM_PROCESS: 0,
      CL_HIGH: -1, CL_MEDIUM: 1, CL_LOW: 2, CL_DOCUMENTARY: 2, CL_EXPRESSIVE: 0,
      SF_HIGH_POSED: -2, SF_HIGH_CANDID: 2, SF_MEDIUM: 1, SF_LOW_PRESENT: 0, SF_ABSENT: 0, SF_PORTRAIT_STYLE: -1,
      LS_DOMESTIC: -2, LS_OUTDOOR_CASUAL: 1, LS_OUTDOOR_EXTREME: 2, LS_URBAN_SOCIAL: 0,
      LS_INTELLECTUAL: 0, LS_CREATIVE: 0, LS_FITNESS: 1, LS_TRAVEL: 3, LS_COMMUNITY: 0,
      ER_OPTIMISTIC: 2, ER_EARNEST: 2, ER_CONTEMPLATIVE: -1, ER_ENERGETIC: 2,
      ER_MELANCHOLIC: -2, ER_WIDE_RANGE: 0, ER_IRONIC: 0, ER_RESTRAINED: -1
    }
  },
  {
    id: "tender_architect",
    name: "The Tender Architect",
    tagline: "모든 걸 정성껏 짓는 사람",
    description: "관계, 공간, 루틴을 극도로 세심하게 만듦. 행동으로 사랑을 표현하고 3주 전에 한 말을 기억함.",
    attracted_to: "크고 혼란스러운 내면을 가진 사람. 제대로 돌봄을 받아본 적 없는 창의적인 타입.",
    attracted_by: "안정을 원하지 않는다고 하다가 6개월 후 없어서는 안 될 존재가 됨을 깨닫는 사람.",
    blind_spot: "관계가 준비되기 전에 그릇을 먼저 만듦. 필요로 하는 것과 선택받는 것을 혼동함.",
    pull_quote: "당신은 누군가의 집 전체입니다. 아직 문을 열지 않았을 뿐.",
    scoring_weights: {
      CT_WARM: 2, CT_COOL: -1, CT_NEUTRAL: 1, CT_MIXED: 0, CT_HIGH_CON: -1,
      SM_NATURE_DOMESTIC: 2, SM_PEOPLE_INTIMATE: 1, SM_FOOD: 2, SM_PEOPLE_SOCIAL: 0,
      SM_SELF: -1, SM_OBJECTS: 1, SM_TEXT: 0, SM_NATURE_WILD: -1, SM_ARCHITECTURE: 1, SM_MOVEMENT: -1, SM_PROCESS: 3,
      CL_HIGH: 0, CL_MEDIUM: 2, CL_LOW: -1, CL_DOCUMENTARY: 1, CL_EXPRESSIVE: 1,
      SF_HIGH_POSED: -2, SF_HIGH_CANDID: -1, SF_MEDIUM: 0, SF_LOW_PRESENT: 2, SF_ABSENT: 1, SF_PORTRAIT_STYLE: 0,
      LS_DOMESTIC: 3, LS_OUTDOOR_CASUAL: 1, LS_OUTDOOR_EXTREME: -1, LS_URBAN_SOCIAL: -1,
      LS_INTELLECTUAL: 1, LS_CREATIVE: 2, LS_FITNESS: 0, LS_TRAVEL: 0, LS_COMMUNITY: 1,
      ER_OPTIMISTIC: 1, ER_EARNEST: 3, ER_CONTEMPLATIVE: 1, ER_ENERGETIC: -1,
      ER_MELANCHOLIC: 0, ER_WIDE_RANGE: 0, ER_IRONIC: -2, ER_RESTRAINED: 1
    }
  },
  {
    id: "silver_flame",
    name: "The Silver Flame",
    tagline: "방 안의 공기를 바꾸는 사람",
    description: "카리스마와 자기인식이 동시에 있음. 내면에서 빛이 나는 타입. 겉으론 접근하기 쉬워 보이지만 실제론 매우 선택적.",
    attracted_to: "표면에 감동받지 않는 사람. 카리스마를 꿰뚫어보고도 남아있는 사람. 조용한 유능함.",
    attracted_by: "거의 모든 사람이 잠깐. 따뜻함과 어려움의 조합을 이해하는 사람이 오래 남음.",
    blind_spot: "자립심을 방어로 연기함. 인정받지만 알려지지 않는 관계에 머뭄.",
    pull_quote: "당신에게 맞는 사람은 환한 버전보다 조용한 버전에 더 관심을 가집니다.",
    scoring_weights: {
      CT_WARM: 0, CT_COOL: 1, CT_NEUTRAL: 0, CT_MIXED: 0, CT_HIGH_CON: 3,
      SM_NATURE_DOMESTIC: -1, SM_PEOPLE_INTIMATE: 1, SM_FOOD: -1, SM_PEOPLE_SOCIAL: 2,
      SM_SELF: 2, SM_OBJECTS: 1, SM_TEXT: 0, SM_NATURE_WILD: -1, SM_ARCHITECTURE: 1, SM_MOVEMENT: 0, SM_PROCESS: 0,
      CL_HIGH: 2, CL_MEDIUM: 0, CL_LOW: -1, CL_DOCUMENTARY: -1, CL_EXPRESSIVE: 1,
      SF_HIGH_POSED: 3, SF_HIGH_CANDID: 0, SF_MEDIUM: 0, SF_LOW_PRESENT: -1, SF_ABSENT: -2, SF_PORTRAIT_STYLE: 2,
      LS_DOMESTIC: -1, LS_OUTDOOR_CASUAL: 0, LS_OUTDOOR_EXTREME: -1, LS_URBAN_SOCIAL: 2,
      LS_INTELLECTUAL: 1, LS_CREATIVE: 2, LS_FITNESS: 0, LS_TRAVEL: 1, LS_COMMUNITY: 0,
      ER_OPTIMISTIC: 0, ER_EARNEST: 0, ER_CONTEMPLATIVE: 1, ER_ENERGETIC: 1,
      ER_MELANCHOLIC: 0, ER_WIDE_RANGE: 1, ER_IRONIC: 1, ER_RESTRAINED: 2
    }
  },
  {
    id: "curator",
    name: "The Curator",
    tagline: "취향이 곧 언어인 사람",
    description: "탁월한 감각을 가졌고 그것 때문에 약간 고통받음. 환경의 모든 것이 의도적. 얕은 게 아니라 취향이 세상을 처리하는 방식.",
    attracted_to: "자기만의 강한 미학이 있고 맞추려 하지 않는 사람. 자기답게 탁월한 사람.",
    attracted_by: "더 나은 삶의 버전을 소개받고 싶은 사람. 품질을 알아보는 사람.",
    blind_spot: "미적 일치를 감정적 호환성으로 혼동함. 잘못된 폰트로 온 따뜻함을 걸러냄.",
    pull_quote: "같은 취향의 파트너가 필요한 게 아닙니다. 자기 취향에 확신이 있는 파트너가 필요합니다.",
    scoring_weights: {
      CT_WARM: 0, CT_COOL: 1, CT_NEUTRAL: 3, CT_MIXED: -3, CT_HIGH_CON: 1,
      SM_NATURE_DOMESTIC: 0, SM_PEOPLE_INTIMATE: -1, SM_FOOD: 1, SM_PEOPLE_SOCIAL: -2,
      SM_SELF: -2, SM_OBJECTS: 3, SM_TEXT: 1, SM_NATURE_WILD: -1, SM_ARCHITECTURE: 2, SM_MOVEMENT: -2, SM_PROCESS: 1,
      CL_HIGH: 4, CL_MEDIUM: 0, CL_LOW: -3, CL_DOCUMENTARY: 0, CL_EXPRESSIVE: -1,
      SF_HIGH_POSED: -1, SF_HIGH_CANDID: -2, SF_MEDIUM: -1, SF_LOW_PRESENT: 1, SF_ABSENT: 2, SF_PORTRAIT_STYLE: 1,
      LS_DOMESTIC: 1, LS_OUTDOOR_CASUAL: 0, LS_OUTDOOR_EXTREME: -2, LS_URBAN_SOCIAL: -1,
      LS_INTELLECTUAL: 2, LS_CREATIVE: 2, LS_FITNESS: -1, LS_TRAVEL: 1, LS_COMMUNITY: -1,
      ER_OPTIMISTIC: -1, ER_EARNEST: 0, ER_CONTEMPLATIVE: 2, ER_ENERGETIC: -2,
      ER_MELANCHOLIC: 0, ER_WIDE_RANGE: -2, ER_IRONIC: 0, ER_RESTRAINED: 3
    }
  },
  {
    id: "voltage",
    name: "The Voltage",
    tagline: "전류를 가져오는 사람",
    description: "운동적이고 자기장이 강하며 대부분이 지속하기 어려운 주파수로 작동함. 압도하려는 게 아닌데 자주 압도함.",
    attracted_to: "흐름을 끊지 않고 안정시켜주는 사람. 조용하지만 지루하지 않은 사람.",
    attracted_by: "더 살아있고 싶은 사람. 단조로움에서 회복 중인 사람.",
    blind_spot: "깊이를 넓이로 대체함. 새로운 사람이 항상 오기 때문에 누군가 사라지는 걸 알아채지 못함.",
    pull_quote: "당신에게 맞는 사람은 당신이 에너지를 주는 사람이 아니라 드디어 숨 쉴 수 있게 해주는 사람입니다.",
    scoring_weights: {
      CT_WARM: 1, CT_COOL: 0, CT_NEUTRAL: 0, CT_MIXED: 2, CT_HIGH_CON: 1,
      SM_NATURE_DOMESTIC: -1, SM_PEOPLE_INTIMATE: 0, SM_FOOD: 0, SM_PEOPLE_SOCIAL: 3,
      SM_SELF: 1, SM_OBJECTS: -1, SM_TEXT: -1, SM_NATURE_WILD: 0, SM_ARCHITECTURE: 0, SM_MOVEMENT: 2, SM_PROCESS: 0,
      CL_HIGH: -2, CL_MEDIUM: 0, CL_LOW: 3, CL_DOCUMENTARY: 0, CL_EXPRESSIVE: 1,
      SF_HIGH_POSED: 0, SF_HIGH_CANDID: 2, SF_MEDIUM: 1, SF_LOW_PRESENT: -1, SF_ABSENT: -2, SF_PORTRAIT_STYLE: -1,
      LS_DOMESTIC: -2, LS_OUTDOOR_CASUAL: 0, LS_OUTDOOR_EXTREME: 0, LS_URBAN_SOCIAL: 3,
      LS_INTELLECTUAL: 0, LS_CREATIVE: 1, LS_FITNESS: 0, LS_TRAVEL: 1, LS_COMMUNITY: 1,
      ER_OPTIMISTIC: 1, ER_EARNEST: 0, ER_CONTEMPLATIVE: -2, ER_ENERGETIC: 3,
      ER_MELANCHOLIC: -2, ER_WIDE_RANGE: 1, ER_IRONIC: 1, ER_RESTRAINED: -2
    }
  },
  {
    id: "wilderness",
    name: "The Wilderness",
    tagline: "길들여지지 않은 채로 깊이 살아있는 사람",
    description: "가장 좋은 의미에서 야생적. 자연과의 관계가 거의 영적. 더 작아지길 요구하는 기회는 거절해왔음.",
    attracted_to: "속도를 맞출 수 있는 사람 — 꼭 야외가 아니어도. 삶에 대한 식욕이 있는 사람.",
    attracted_by: "너무 문명화되어 뭔가 중요한 게 조용해진 것 같은 사람.",
    blind_spot: "자립을 아무도 필요 없음으로 착각함. 야생을 회피 시스템으로 사용함.",
    pull_quote: "당신에게 맞는 사람은 당신을 안으로 데려오려 하지 않습니다. 함께 날씨 속에 서려 합니다.",
    scoring_weights: {
      CT_WARM: 0, CT_COOL: 1, CT_NEUTRAL: 2, CT_MIXED: 0, CT_HIGH_CON: -1,
      SM_NATURE_DOMESTIC: -1, SM_PEOPLE_INTIMATE: 0, SM_FOOD: -1, SM_PEOPLE_SOCIAL: -2,
      SM_SELF: -1, SM_OBJECTS: 0, SM_TEXT: -1, SM_NATURE_WILD: 4, SM_ARCHITECTURE: -2, SM_MOVEMENT: 1, SM_PROCESS: 2,
      CL_HIGH: -3, CL_MEDIUM: 0, CL_LOW: 2, CL_DOCUMENTARY: 2, CL_EXPRESSIVE: 0,
      SF_HIGH_POSED: -3, SF_HIGH_CANDID: 0, SF_MEDIUM: 0, SF_LOW_PRESENT: 1, SF_ABSENT: 2, SF_PORTRAIT_STYLE: -1,
      LS_DOMESTIC: -3, LS_OUTDOOR_CASUAL: 0, LS_OUTDOOR_EXTREME: 4, LS_URBAN_SOCIAL: -3,
      LS_INTELLECTUAL: 0, LS_CREATIVE: 0, LS_FITNESS: 2, LS_TRAVEL: 1, LS_COMMUNITY: 0,
      ER_OPTIMISTIC: 0, ER_EARNEST: 2, ER_CONTEMPLATIVE: 1, ER_ENERGETIC: 1,
      ER_MELANCHOLIC: 0, ER_WIDE_RANGE: 0, ER_IRONIC: -1, ER_RESTRAINED: 1
    }
  },
  {
    id: "tidal",
    name: "The Tidal",
    tagline: "감정의 파도로 사랑하는 사람",
    description: "순환적이고 감정적으로 지능적이며 깊이 느낌. 강렬함과 고요함이 교차함. 드라마틱한 게 아니라 리드미컬한 것.",
    attracted_to: "감정적 폭을 두려워하지 않는 사람. 유연하지만 경직되지 않은 안정감.",
    attracted_by: "감정적으로 평평한 파트너와 있다가 굶주렸던 사람.",
    blind_spot: "후퇴할 때 소통하지 않고 수용을 기대함. 거리가 일시적인지 영구적인지 파트너가 알 수 없음.",
    pull_quote: "당신에게 맞는 사람은 파도 사이의 고요함도 파도만큼 아름답다고 느낍니다.",
    scoring_weights: {
      CT_WARM: 1, CT_COOL: 1, CT_NEUTRAL: 0, CT_MIXED: 2, CT_HIGH_CON: 0,
      SM_NATURE_DOMESTIC: 0, SM_PEOPLE_INTIMATE: 2, SM_FOOD: 0, SM_PEOPLE_SOCIAL: 0,
      SM_SELF: 0, SM_OBJECTS: 0, SM_TEXT: 1, SM_NATURE_WILD: 2, SM_ARCHITECTURE: 0, SM_MOVEMENT: 0, SM_PROCESS: 0,
      CL_HIGH: -1, CL_MEDIUM: 1, CL_LOW: 1, CL_DOCUMENTARY: 0, CL_EXPRESSIVE: 3,
      SF_HIGH_POSED: -1, SF_HIGH_CANDID: 1, SF_MEDIUM: 2, SF_LOW_PRESENT: 1, SF_ABSENT: 0, SF_PORTRAIT_STYLE: 1,
      LS_DOMESTIC: 0, LS_OUTDOOR_CASUAL: 1, LS_OUTDOOR_EXTREME: 0, LS_URBAN_SOCIAL: 0,
      LS_INTELLECTUAL: 1, LS_CREATIVE: 2, LS_FITNESS: 0, LS_TRAVEL: 0, LS_COMMUNITY: 0,
      ER_OPTIMISTIC: 0, ER_EARNEST: 1, ER_CONTEMPLATIVE: 1, ER_ENERGETIC: 0,
      ER_MELANCHOLIC: 2, ER_WIDE_RANGE: 4, ER_IRONIC: -1, ER_RESTRAINED: -2
    }
  },
  {
    id: "cartographer",
    name: "The Cartographer",
    tagline: "모든 것을 지도로 만드는 사람",
    description: "관계, 시스템, 자신의 감정 지형을 모두 매핑함. 다른 사람이 놓치는 패턴을 찾음. 분석이 친밀감의 형태.",
    attracted_to: "이해받는 것에 관심 있고 분석을 친밀감으로 느끼는 사람.",
    attracted_by: "제대로 보인 적 없는 사람 — 카토그래퍼가 지도를 그려서 보여줄 것이기 때문에.",
    blind_spot: "관계 안에 있는 것보다 관계를 분석함. 패턴을 이해하는 게 뭔가를 하는 것과 다름.",
    pull_quote: "당신에게 맞는 사람은 처음으로 전체 텍스트를 읽은 것 같은 느낌을 받습니다.",
    scoring_weights: {
      CT_WARM: -1, CT_COOL: 1, CT_NEUTRAL: 3, CT_MIXED: 0, CT_HIGH_CON: -1,
      SM_NATURE_DOMESTIC: 0, SM_PEOPLE_INTIMATE: -1, SM_FOOD: -1, SM_PEOPLE_SOCIAL: -2,
      SM_SELF: -2, SM_OBJECTS: 2, SM_TEXT: 3, SM_NATURE_WILD: -1, SM_ARCHITECTURE: 1, SM_MOVEMENT: 0, SM_PROCESS: 3,
      CL_HIGH: 0, CL_MEDIUM: 0, CL_LOW: -1, CL_DOCUMENTARY: 4, CL_EXPRESSIVE: -1,
      SF_HIGH_POSED: -3, SF_HIGH_CANDID: -1, SF_MEDIUM: -1, SF_LOW_PRESENT: 1, SF_ABSENT: 3, SF_PORTRAIT_STYLE: 0,
      LS_DOMESTIC: 0, LS_OUTDOOR_CASUAL: 0, LS_OUTDOOR_EXTREME: -1, LS_URBAN_SOCIAL: -2,
      LS_INTELLECTUAL: 3, LS_CREATIVE: 2, LS_FITNESS: 0, LS_TRAVEL: 1, LS_COMMUNITY: 1,
      ER_OPTIMISTIC: -1, ER_EARNEST: 1, ER_CONTEMPLATIVE: 2, ER_ENERGETIC: -1,
      ER_MELANCHOLIC: 0, ER_WIDE_RANGE: -1, ER_IRONIC: 1, ER_RESTRAINED: 3
    }
  },
  {
    id: "returning",
    name: "The Returning",
    tagline: "뭔가를 겪고 돌아온 사람",
    description: "중요한 무언가를 겪고 변해서 돌아옴. 부서진 게 아니라 달라진 것. 살아낸 경험만이 만들어내는 깊이를 가짐.",
    attracted_to: "같은 걸 겪은 사람이 아니어도 됨. 겪어낸 사람의 그 질감을 즉시 알아봄.",
    attracted_by: "자기 깊이 속에서 외로운 사람. 표면적인 것보다 살아낸 질감에 끌리는 사람.",
    blind_spot: "변화의 서사로 새로운 사람을 거리에 두는 것. 이야기가 개방성으로 포장된 벽이 됨.",
    pull_quote: "당신에게 맞는 사람은 어둠을 모르는 사람이 아닙니다. 빛으로 돌아오는 길을 찾은 사람입니다.",
    scoring_weights: {
      CT_WARM: 0, CT_COOL: 1, CT_NEUTRAL: 2, CT_MIXED: 1, CT_HIGH_CON: -1,
      SM_NATURE_DOMESTIC: 2, SM_PEOPLE_INTIMATE: 2, SM_FOOD: 1, SM_PEOPLE_SOCIAL: -1,
      SM_SELF: 0, SM_OBJECTS: 1, SM_TEXT: 1, SM_NATURE_WILD: 1, SM_ARCHITECTURE: 0, SM_MOVEMENT: -1, SM_PROCESS: 1,
      CL_HIGH: -1, CL_MEDIUM: 2, CL_LOW: 0, CL_DOCUMENTARY: 1, CL_EXPRESSIVE: 1,
      SF_HIGH_POSED: -2, SF_HIGH_CANDID: 0, SF_MEDIUM: 0, SF_LOW_PRESENT: 2, SF_ABSENT: 1, SF_PORTRAIT_STYLE: 1,
      LS_DOMESTIC: 1, LS_OUTDOOR_CASUAL: 2, LS_OUTDOOR_EXTREME: 0, LS_URBAN_SOCIAL: -2,
      LS_INTELLECTUAL: 1, LS_CREATIVE: 2, LS_FITNESS: 1, LS_TRAVEL: 0, LS_COMMUNITY: 1,
      ER_OPTIMISTIC: 0, ER_EARNEST: 2, ER_CONTEMPLATIVE: 3, ER_ENERGETIC: -1,
      ER_MELANCHOLIC: 2, ER_WIDE_RANGE: 1, ER_IRONIC: -1, ER_RESTRAINED: 1
    }
  },
  {
    id: "long_game",
    name: "The Long Game",
    tagline: "사랑을 사건이 아닌 실천으로 보는 사람",
    description: "서두르지 않음. 천천히 결정하고 그 결정을 지킴. 깊이를 새로움보다 가치 있게 여김.",
    attracted_to: "과정이 핵심임을 아는 사람. 경험이 아닌 삶을 원하는 사람.",
    attracted_by: "드디어 달리기를 멈출 준비가 된 사람. 활동과 살아있음을 혼동하다 의문을 품기 시작한 사람.",
    blind_spot: "인내가 수동성이 됨. 사람이 필요한 것이 되기를 기다리다 격차를 직면하지 않음.",
    pull_quote: "당신에게 맞는 사람은 가장 흥미로운 사람이 아닙니다. 20년 후에도 대화하고 싶은 사람입니다.",
    scoring_weights: {
      CT_WARM: 2, CT_COOL: 0, CT_NEUTRAL: 1, CT_MIXED: -1, CT_HIGH_CON: -1,
      SM_NATURE_DOMESTIC: 2, SM_PEOPLE_INTIMATE: 2, SM_FOOD: 1, SM_PEOPLE_SOCIAL: 0,
      SM_SELF: -1, SM_OBJECTS: 0, SM_TEXT: 1, SM_NATURE_WILD: 0, SM_ARCHITECTURE: 0, SM_MOVEMENT: -2, SM_PROCESS: 2,
      CL_HIGH: 1, CL_MEDIUM: 2, CL_LOW: 0, CL_DOCUMENTARY: 2, CL_EXPRESSIVE: 0,
      SF_HIGH_POSED: -2, SF_HIGH_CANDID: 0, SF_MEDIUM: 0, SF_LOW_PRESENT: 2, SF_ABSENT: 1, SF_PORTRAIT_STYLE: 0,
      LS_DOMESTIC: 2, LS_OUTDOOR_CASUAL: 2, LS_OUTDOOR_EXTREME: -1, LS_URBAN_SOCIAL: -1,
      LS_INTELLECTUAL: 1, LS_CREATIVE: 1, LS_FITNESS: 1, LS_TRAVEL: -1, LS_COMMUNITY: 1,
      ER_OPTIMISTIC: 1, ER_EARNEST: 3, ER_CONTEMPLATIVE: 2, ER_ENERGETIC: -1,
      ER_MELANCHOLIC: 1, ER_WIDE_RANGE: -1, ER_IRONIC: -2, ER_RESTRAINED: 1
    }
  }
]

export function calculateArchetype(signals: Record<string, string | string[]>) {
  const scores: Record<string, number> = {}

  for (const archetype of archetypes) {
    let total = 0
    for (const [key, value] of Object.entries(signals)) {
      if (Array.isArray(value)) {
        for (const v of value) {
          total += (archetype.scoring_weights as Record<string, number>)[v] ?? 0
        }
      } else {
        total += (archetype.scoring_weights as Record<string, number>)[value] ?? 0
      }
    }
    scores[archetype.id] = total
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1])
  const topId = sorted[0][0]
  return archetypes.find(a => a.id === topId)!
}