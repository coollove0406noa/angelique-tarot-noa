=== SECTION FOUND ===
// ---- 霑ｽ蜉: Ritual Helpers ----
    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    function showLoading() {
      const o = document.getElementById('loadingOverlay');
      if (o) { o.classList.add('is-on'); o.setAttribute('aria-hidden', 'false'); }
    }
    function hideLoading() {
      const o = document.getElementById('loadingOverlay');
      if (o) { o.classList.remove('is-on'); o.setAttribute('aria-hidden', 'true'); }
    }

    function getResultsEl() {
      return document.getElementById('result') || document.getElementById('resultsArea');
    }

    function scrollToResults() {
      const el = getResultsEl();
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function applyReveal() {
      const root = getResultsEl();
      if (!root) return;

      const items = root.querySelectorAll('.reveal-item');
      let i = 0;
      items.forEach((node) => {
        const delay = Math.min(600, i * 35); // gentle stagger
        setTimeout(() => node.classList.add('is-in'), delay);
        i++;
      });
    }

    // ---- 繧ｫ繝ｼ繝峨ｒ蠑輔￥繧ｳ繧｢繝ｭ繧ｸ繝・け ----
    function drawCore(count) {
      const picked = drawUnique(count);

      // --- Energy Layers (Numerology & Nine Star Ki) ---
      const userDate = document.getElementById("userBirthdate")?.value;
      const userName = document.getElementById("userName")?.value;
      const partnerDate = document.getElementById("partnerBirthdate")?.value;

      let energyLayerHTML = "";
      let numData = null;
      let userStar = null;

      if (userDate) {
        numData = { lp: calculateLifePath(userDate), ...calculateNameNumbers(userName) };

        const yearStr = userDate.substring(0, 4);
        const isBeforeFeb4 = (parseInt(userDate.substring(5, 7)) === 1 || (parseInt(userDate.substring(5, 7)) === 2 && parseInt(userDate.substring(8, 10)) 
=== SECTION FOUND ===
// ---- Integrated Reading (邱丞粋髑大ｮ・ ----
    function saveLastTheme(theme) {
      if (!theme) return;
      localStorage.setItem("angelique_last_theme", theme);
    }

    function generateIntegratedReading({ tarotCards, numerology, nineStar, questionType, spreadType }) {
      if (!tarotCards || tarotCards.length === 0) return "";
      const primaryCard = tarotCards[0].card;
      if (!primaryCard) return "";
      const isReversed = tarotCards[0].isReversed;
      const themeRaw = (primaryCard.themes || "").split("|")[0] || "迴ｾ蝨ｨ縺ｮ迥ｶ豕・;

      let welcomeHtml = "";
      const lastTheme = localStorage.getItem("angelique_last_theme");
      if (lastTheme && lastTheme !== themeRaw) {
        welcomeHtml = `
=== SECTION FOUND ===
// ---- 謨ｰ遘倩｡・(Numerology - Soul Blueprint) Logic ----
    const NUMEROLOGY_DATA = {
      1: { lp: "閾ｪ繧峨・雜ｳ縺ｧ遶九■縲∵眠縺励＞驕薙ｒ蛻・ｊ髢九￥髢区挙閠・・繧ｨ繝阪Ν繧ｮ繝ｼ繧堤ｧ倥ａ縺ｦ縺・∪縺吶・, su: "閾ｪ蛻・・諢丞ｿ励ｒ雋ｫ縺阪√Μ繝ｼ繝繝ｼ縺ｨ縺励※閾ｪ逕ｱ縺ｫ逕溘″縺溘＞縺ｨ縺・≧鬘倥＞縺悟･･蠎輔↓縺ゅｋ繧医≧縺ｧ縺吶・, pe: "閾ｪ遶句ｿ・′蠑ｷ縺上√お繝阪Ν繧ｮ繝・す繝･縺ｧ豎ｺ譁ｭ蜉帙・縺ゅｋ莠ｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ豌鈴・縺後≠繧翫∪縺吶・ },
      2: { lp: "莠ｺ縺ｮ蠢・↓蟇・ｊ豺ｻ縺・∫ｴｰ繧・°縺ｪ豌鈴・繧翫〒隱ｿ蜥後ｒ逕溘∩蜃ｺ縺吶し繝昴・繧ｿ繝ｼ縺ｮ豌苓ｳｪ縺ｫ諱ｵ縺ｾ繧後※縺・∪縺吶・, su: "諢帙→蟷ｳ蜥後↓蛹・∪繧後∬ｪｰ縺九→豺ｱ縺冗ｹ九′繧翫∵髪縺亥粋縺・◆縺・→縺・≧鬘倥＞繧呈干縺・※縺・∪縺吶・, pe: "蜆ｪ縺励￥謗ｧ縺医ａ縺ｧ縲∽ｸ邱偵↓縺・ｋ縺ｨ螳牙ｿ・〒縺阪ｋ貂ｩ縺九＞莠ｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ繧医≧縺ｧ縺吶・ },
      3: { lp: "辟｡驍ｪ豌励↑蟄蝉ｾ帙・繧医≧縺ｫ莠ｺ逕溘ｒ讌ｽ縺励∩縲∝捉蝗ｲ繧呈・繧九￥辣ｧ繧峨☆陦ｨ迴ｾ閠・・謇崎・縺ｮ豌鈴・縺後≠繧翫∪縺吶・, su: "閾ｪ蛻・・諢溯ｦ壹ｒ閾ｪ逕ｱ縺ｫ陦ｨ迴ｾ縺励∝ｿ・°繧峨・蝟懊・繧貞・縺九■蜷医＞縺溘＞縺ｨ縺・≧鬘倥＞縺碁撕縺九↓豬√ｌ縺ｦ縺・∪縺吶・, pe: "譏弱ｋ縺上Θ繝ｼ繝｢繧｢縺後≠繧翫√◎縺ｮ蝣ｴ繧偵ヱ繝・→闖ｯ繧・°縺ｫ縺吶ｋ鬲・鴨逧・↑莠ｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ繧医≧縺ｧ縺吶・ },
      4: { lp: "隱螳溘↓迚ｩ莠九↓蜿悶ｊ邨・∩縲∵昭繧九′縺ｪ縺・ｮ牙ｿ・・蝨溷床繧堤ｯ峨″荳翫￡繧玖・莠ｺ豌苓ｳｪ縺ｫ貅縺｡縺ｦ縺・∪縺吶・, su: "遒ｺ縺九↑遘ｩ蠎上・荳ｭ縺ｧ縲∝ｽ｢縺ゅｋ繧ゅ・繧剃ｸ縺､縺ｲ縺ｨ縺､荳∝ｯｧ縺ｫ螳梧・縺輔○縺溘＞縺ｨ縺・≧鬘倥＞繧呈干縺・※縺・∪縺吶・, pe: "逵滄擇逶ｮ縺ｧ雋ｬ莉ｻ諢溘′蠑ｷ縺上√＞縺悶→縺・≧譎ゅ↓鬆ｼ繧翫↓縺ｪ繧句・ｮ溘↑莠ｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ豌鈴・縺後≠繧翫∪縺吶・ },
      5: { lp: "螂ｽ螂・ｿ・・襍ｴ縺上∪縺ｾ縺ｫ譛ｪ菴馴ｨ薙・荳也阜繧帝｣帙・蝗槭ｋ縲∬・逕ｱ縺ｪ蜀帝匱閠・・鬲ゅｒ螳ｿ縺励※縺・∪縺吶・, su: "縺ゅｉ繧・ｋ譫邨・∩縺九ｉ鬟帙・蜃ｺ縺励∽ｺ疲─繧帝壹§縺ｦ荳也阜繧貞袖繧上＞蟆ｽ縺上＠縺溘＞縺ｨ縺・≧鬘倥＞縺後≠繧九ｈ縺・〒縺吶・, pe: "繝輔ャ繝医Ρ繝ｼ繧ｯ縺瑚ｻｽ縺上∝ｸｸ縺ｫ譁ｰ縺励＞鬚ｨ繧帝°繧薙〒縺上ｌ繧句絢豼逧・↑莠ｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ縺九ｂ縺励ｌ縺ｾ縺帙ｓ縲・ },
      6: { lp: "豺ｱ縺・・諠・→雋ｬ莉ｻ諢溘〒縲∬ｺｫ霑代↑莠ｺ縲・↓鄒弱＠縺・ｪｿ蜥後ｒ繧ゅ◆繧峨☆螂我ｻ戊・・蠢・ｒ縺頑戟縺｡縺ｧ縺吶・, su: "諢帙☆繧倶ｺｺ縺溘■繧貞ｮ医ｊ縲∫ｾ弱＠縺丞ｮ牙ｿ・〒縺阪ｋ螻・ｴ謇繧貞卸繧贋ｸ翫￡縺溘＞縺ｨ縺・≧鬘倥＞繧呈干縺・※縺・∪縺吶・, pe: "蛹・ｮｹ蜉帙′縺ゅｊ縲∵昴＞繧・ｊ縺ｫ貅｢繧後◆諢帶ュ豺ｱ縺・ｺｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ豌鈴・縺後≠繧翫∪縺吶・ },
      7: { lp: "逶ｮ縺ｫ隕九∴縺ｪ縺・悽雉ｪ繧呈爾豎ゅ＠縲∫峡閾ｪ縺ｮ蜩ｲ蟄ｦ繧呈ｷｱ繧√※縺・￥蟄､鬮倥・謗｢豎り・・諤ｧ雉ｪ縺ｫ諱ｵ縺ｾ繧後※縺・∪縺吶・, su: "髱吶°縺ｪ迺ｰ蠅・〒縲∬・蛻・・蜀・↑繧狗悄螳溘→豺ｱ縺丞髄縺榊粋縺・◆縺・→縺・≧鬘倥＞縺碁撕縺九↓豬√ｌ縺ｦ縺・∪縺吶・, pe: "遏･逧・〒繝溘せ繝・Μ繧｢繧ｹ縺ｪ縲∫峡迚ｹ縺ｮ貔・ｓ縺遨ｺ豌玲─繧呈戟縺､莠ｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ繧医≧縺ｧ縺吶・ },
      8: { lp: "迴ｾ螳滉ｸ也阜縺ｧ遒ｺ縺九↑雎翫°縺輔ｒ謇九↓蜈･繧後√◎繧後ｒ遉ｾ莨壹↓驍・・縺励※縺・￥螳溯｡悟鴨繧偵♀謖√■縺ｧ縺吶・, su: "閾ｪ蛻・・蜉帙〒螟ｧ縺阪↑謌先棡繧帝＃謌舌＠縲∝､壹￥縺ｮ莠ｺ縺ｨ雎翫°縺輔ｒ蛻・°縺｡蜷医＞縺溘＞縺ｨ縺・≧鬘倥＞繧呈干縺・※縺・∪縺吶・, pe: "蝣ゅ・→縺励◆繧ｪ繝ｼ繝ｩ縺後≠繧翫√ヱ繝ｯ繝輔Ν縺ｧ鬆ｼ繧ゅ＠縺・Μ繝ｼ繝繝ｼ譬ｼ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ豌鈴・縺後≠繧翫∪縺吶・ },
      9: { lp: "縺吶∋縺ｦ繧貞女縺大・繧後ｋ豬ｷ縺ｮ繧医≧縺ｪ蝎ｨ縺ｧ縲∽ｺｺ縲・・蠢・ｒ逋偵ｄ縺呎焔謾ｾ縺励・謇崎・繧堤ｧ倥ａ縺ｦ縺・∪縺吶・, su: "荳也阜縺悟ｹｳ蜥後〒縺ゅ▲縺ｦ縺ｻ縺励＞縺ｨ鬘倥＞縲∽ｺｺ縲・・謔ｲ縺励∩繧堤剪繧・＠縺溘＞縺ｨ縺・≧豺ｱ縺・ｬ｡蜈・・諠ｳ縺・′縺ゅｋ繧医≧縺ｧ縺吶・, pe: "縺吶∋縺ｦ繧定ｦ矩上°縺吶ｈ縺・↑迸ｳ繧呈戟縺｣縺溘√Ο繝槭Φ繝√せ繝医〒蟇帛､ｧ縺ｪ莠ｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ豌鈴・縺後≠繧翫∪縺吶・ },
      11: { lp: "螟ｩ縺九ｉ縺ｮ逶ｴ諢溘ｒ蜿励￠蜿悶ｊ縲√◎繧後ｒ莠ｺ縲・↓莨昴∴繧狗･樒ｧ倡噪縺ｪ繝｡繝・そ繝ｳ繧ｸ繝｣繝ｼ縺ｮ蠖ｹ蜑ｲ繧偵♀謖√■縺ｧ縺吶・, su: "繧ｹ繝斐Μ繝√Η繧｢繝ｫ縺ｪ逵溷ｮ溘↓隗ｦ繧後∽ｺｺ縲・↓繧､繝ｳ繧ｹ繝斐Ξ繝ｼ繧ｷ繝ｧ繝ｳ繧剃ｸ弱∴縺溘＞縺ｨ縺・≧蠑ｷ縺・｡倥＞繧呈干縺・※縺・∪縺吶・, pe: "縺ｩ縺薙°豬ｮ荳夜屬繧後＠縺溘∽ｸ肴晁ｭｰ縺ｪ逶ｴ諢溷鴨縺ｨ郢顔ｴｰ縺輔ｒ謖√▽莠ｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ繧医≧縺ｧ縺吶・ },
      22: { lp: "鬮倥＞逅・Φ繧堤樟螳溘・荳也阜縺ｫ蠑輔″荳九ｍ縺励∬ｪｰ繧ゅ′鬩壹￥繧医≧縺ｪ隕乗ｨ｡縺ｧ蠖｢縺ｫ縺吶ｋ讒狗ｯ芽・・蜉帙↓貅縺｡縺ｦ縺・∪縺吶・, su: "蛟倶ｺｺ逧・↑譫繧定ｶ・∴縲∽ｸ也阜隕乗ｨ｡縺ｧ蟷ｳ蜥後ｄ雎翫°縺輔ｒ螳溽樟縺励◆縺・→縺・≧螢ｮ螟ｧ縺ｪ鬘倥＞縺後≠繧九ｈ縺・〒縺吶・, pe: "繧ｫ繝ｪ繧ｹ繝樊ｧ縺後≠繧翫∽ｸ榊庄閭ｽ繧貞庄閭ｽ縺ｫ縺吶ｋ繧医≧縺ｪ繧ｹ繧ｱ繝ｼ繝ｫ縺ｮ螟ｧ縺阪↑莠ｺ縺ｨ縺励※譏縺｣縺ｦ縺・ｋ豌鈴・縺後≠繧翫∪縺吶・ },
      33: { lp: "隕玖ｿ斐ｊ繧呈ｱゅａ縺ｪ縺・勸驕咲噪縺ｪ諢帙〒縲∽ｸ也阜繧貞桁縺ｿ霎ｼ繧繧医≧縺ｪ闖ｩ阮ｩ縺ｮ繧ｨ繝阪Ν繧ｮ繝ｼ繧貞ｮｿ縺励※縺・∪縺吶・, su: "縺薙・荳也阜縺ｮ縺吶∋縺ｦ繧堤┌譚｡莉ｶ縺ｫ諢帙＠縲∝万縺ｳ縺ｮ繝舌う繝悶Ξ繝ｼ繧ｷ繝ｧ繝ｳ繧貞ｺ・￡縺溘＞縺ｨ縺・≧螳・ｮ咏噪縺ｪ鬘倥＞繧呈干縺・※縺・∪縺吶・, pe: "隕乗ｼ螟悶・諢帙→蜆ｪ縺励＆繧呈戟縺､縲√←縺薙↓縺・※繧ら音蛻･縺ｫ逶ｮ繧呈・縺丞ｭ伜惠縺ｨ縺励※譏縺｣縺ｦ縺・ｋ繧医≧縺ｧ縺吶・ },
    };

    const PYTHAGORAS_MAP = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    const VOWELS = ['A', 'E', 'I', 'O', 'U']; // Y is complex, keeping it simple Pythagorean

    function reduceToSingleDigitOrMaster(num) {
      if (num === 0) return 0;
      let current = num;
      while (current > 9 && current !== 11 && current !== 22 && current !== 33) {
        let sum = 0;
        let str = current.toString();
        for (let i = 0; i 
=== SECTION FOUND ===
// ---- 荵晄弌豌怜ｭｦ (Nine Star Ki) Logic ----
    const STAR_DATA = {
      1: { name: "荳逋ｽ豌ｴ譏・, element: "豌ｴ", theme: "譟碑ｻ滓ｧ縺ｨ豺ｱ縺・ｴ槫ｯ・, desc: "豌ｴ縺ｮ繧医≧縺ｫ蠖｢繧貞､峨∴縲√←繧薙↑迥ｶ豕√↓繧ょｯ・ｊ豺ｻ縺・＠縺ｪ繧・°縺ｪ蠑ｷ縺輔ｒ遘倥ａ縺ｦ縺・∪縺吶よｷｱ縺城撕縺九↑諢帶ュ繧定・縺ｫ謚ｱ縺・※縺・ｋ豌鈴・縺後≠繧翫∪縺吶ら┬繧峨★縲√≠縺ｪ縺溘・繝壹・繧ｹ縺ｧ豬√ｌ縺ｦ螟ｧ荳亥､ｫ縺ｧ縺吶・ },
      2: { name: "莠碁ｻ貞悄譏・, element: "蝨・, theme: "閧ｲ謌舌→蝣・ｮ溘＆", desc: "雎翫°縺ｪ螟ｧ蝨ｰ縺ｮ繧医≧縺ｫ縲∽ｺｺ繧・黄莠九ｒ閧ｲ繧貂ｩ縺九＆繧偵♀謖√■縺ｧ縺吶ゆｸ豁ｩ縺壹▽騾ｲ繧縺薙→縺ｧ遒ｺ縺九↑螳溘ｊ繧呈焔縺ｫ縺吶ｋ縺ｧ縺励ｇ縺・よ･縺後↑縺上※繧ゅ√◎縺ｮ縺ｾ縺ｾ縺ｮ縺ゅ↑縺溘〒螟ｧ荳亥､ｫ縺ｧ縺吶・ },
      3: { name: "荳臥｢ｧ譛ｨ譏・, element: "譛ｨ", theme: "闍･縲・＠縺・ｺ榊虚縺ｨ逶ｴ諢・, desc: "譁ｰ闃ｽ縺瑚歓蜷ｹ縺上ｈ縺・↑迹槭・＠縺・お繝阪Ν繧ｮ繝ｼ繧貞・縺ｫ遘倥ａ縺ｦ縺・∪縺吶ゅ◎縺ｮ逶ｴ諢溘→陦悟虚蜉帙′縲∵眠縺励＞鬚ｨ繧偵ｂ縺溘ｉ縺呎ｰ鈴・縺後≠繧翫∪縺吶ゅ＞縺､縺ｧ繧ゅ√≠縺ｪ縺溘・諢溯ｦ壹ｒ菫｡縺倥※螟ｧ荳亥､ｫ縺ｧ縺吶・ },
      4: { name: "蝗帷ｷ第惠譏・, element: "譛ｨ", theme: "隱ｿ蜥後→縺皮ｸ・, desc: "蠢・慍繧医＞鬚ｨ縺ｮ繧医≧縺ｫ縲∽ｺｺ縺ｨ莠ｺ縺ｨ繧堤ｵ舌・縺､縺代ｋ譟斐ｉ縺九↑鬲・鴨縺ｫ諱ｵ縺ｾ繧後※縺・∪縺吶ょ捉蝗ｲ繧貞柱縺ｾ縺帙ｋ縺昴・蜉帙・縲∫｢ｺ縺九↑縺皮ｸ√ｒ蜻ｼ縺ｶ縺ｧ縺励ｇ縺・りか縺ｮ蜉帙ｒ謚懊＞縺ｦ縲√Μ繝ｩ繝・け繧ｹ縺励※螟ｧ荳亥､ｫ縺ｧ縺吶・ },
      5: { name: "莠秘ｻ・悄譏・, element: "蝨・, theme: "荳ｭ蠢・→蝨ｧ蛟堤噪縺ｪ蜉・, desc: "荳・黄縺ｮ荳ｭ蠢・↓蠎ｧ縺吶ｋ繧医≧縺ｪ縲∝ｼｷ縺・ｼ募鴨縺ｨ繧ｫ繝ｪ繧ｹ繝樊ｧ繧偵♀謖√■縺ｧ縺吶ょ峅髮｣繧剃ｹ励ｊ雜翫∴繧句勣縺ｮ螟ｧ縺阪＆縺後≠繧区ｰ鈴・縺後≠繧翫∪縺吶ゅ☆縺ｹ縺ｦ繧定レ雋縺・ｾｼ縺ｾ縺壹∽ｼ代・譎ゅ′縺ゅ▲縺ｦ繧ょ､ｧ荳亥､ｫ縺ｧ縺吶・ },
      6: { name: "蜈ｭ逋ｽ驥第弌", element: "驥・, theme: "鬮俶ｽ斐＆縺ｨ螳梧・", desc: "逎ｨ縺肴栢縺九ｌ縺滄桶遏ｳ縺ｮ繧医≧縺ｪ縲∵ｰ鈴ｫ倥￥邏皮ｲ九↑繧ｨ繝阪Ν繧ｮ繝ｼ繧堤ｧ倥ａ縺ｦ縺・∪縺吶るｫ倥＞逅・Φ繧呈戟縺｡縲∫悄鞫ｯ縺ｫ蜷代″蜷医≧縺雁ｧｿ縺檎岼縺ｫ豬ｮ縺九・縺ｾ縺吶ょｮ檎挑縺ｧ縺ｪ縺上※繧ゅ√≠縺ｪ縺溘・蜊∝・邏譎ｴ繧峨＠縺・・縺ｧ螟ｧ荳亥､ｫ縺ｧ縺吶・ },
      7: { name: "荳・ｵ､驥第弌", element: "驥・, theme: "蝟懊・縺ｨ雎翫°縺・, desc: "螟墓律縺ｮ繧医≧縺ｪ貂ｩ縺九↑霈昴″縺ｨ縲∽ｺｺ逕溘ｒ讌ｽ縺励・霆ｽ繧・°縺輔↓諱ｵ縺ｾ繧後※縺・∪縺吶ゅ◎縺ｮ隨鷹｡斐′縲∝捉蝗ｲ縺ｫ雎翫°縺輔ｒ蠑輔″蟇・○繧区ｰ鈴・縺後≠繧翫∪縺吶ゅ◎縺ｮ縺ｾ縺ｾ縲√≠縺ｪ縺溘ｉ縺励￥讌ｽ縺励ｓ縺ｧ螟ｧ荳亥､ｫ縺ｧ縺吶・ },
      8: { name: "蜈ｫ逋ｽ蝨滓弌", element: "蝨・, theme: "螟牙喧縺ｨ闢・ｩ・, desc: "螻ｱ縺ｮ繧医≧縺ｫ縺ｩ縺｣縺励ｊ縺ｨ縺励◆螳牙ｮ壽─縺ｨ縲∝・縺ｪ繧句､蛾擠縺ｮ蜉帙ｒ縺ｨ繧ゅ↓遘倥ａ縺ｦ縺・∪縺吶ら捩螳溘↓遨阪∩荳翫￡繧九％縺ｨ縺ｧ縲∝､ｧ縺阪↑螻ｱ繧堤ｯ峨￥縺ｧ縺励ｇ縺・らｫ九■豁｢縺ｾ繧区凾髢薙′縺ゅ▲縺ｦ繧ゅ∵ｱｺ縺励※辟｡鬧・↓縺ｯ縺ｪ繧峨↑縺・・縺ｧ螟ｧ荳亥､ｫ縺ｧ縺吶・ },
      9: { name: "荵晉ｴｫ轣ｫ譏・, element: "轣ｫ", theme: "諠・・縺ｨ鄒取э隴・, desc: "辯・∴逶帙ｋ轤弱・繧医≧縺ｪ諠・・縺ｨ縲・強縺・衍諤ｧ繧偵♀謖√■縺ｧ縺吶らｾ弱＠縺・ｂ縺ｮ繧呈・縺励∬・繧峨ｂ蜈峨ｊ霈昴￥蟄伜惠縺ｮ繧医≧縺ｧ縺吶ゅ≠縺ｪ縺溘・縺昴・縺ｾ縺ｾ縺ｮ諠・・縺ｧ縲∝━縺励￥辣ｧ繧峨＠縺ｦ螟ｧ荳亥､ｫ縺ｧ縺吶・ }
    };

    function getHonmeiStar(year, month, day) {
      // 遽蛻・ｼ磯壼ｸｸ2譛・譌･・峨ｒ蟷ｴ縺ｮ蛹ｺ蛻・ｊ縺ｨ縺吶ｋ邁｡譏楢ｨ育ｮ・
      let y = parseInt(year, 10);
      const m = parseInt(month, 10);
      const d = parseInt(day, 10);

      if (m === 1 || (m === 2 && d