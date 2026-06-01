// Content for the immersive /gallery page: each entry pairs one of the owner's
// background photographs (via a CSS class in assets/style.css) with a Greek poem
// set in chosen Greek Google Fonts.
//
// VERIFY BEFORE SHIP: the 4 public-domain additions (Palamas, Cavafy «Η Πόλις»,
// Cavafy «Κεριά», Solomos) were transcribed from Greek Wikisource / Wikipedia.
// A native speaker should confirm the polytonic diacritics and any editorial
// choices flagged in the handoff notes. The 6 pre-existing excerpts are kept
// verbatim from the original site.

export interface PoemFont {
  name: string
  href: string
}

export interface Poem {
  /** Anchor id + dot-nav target. */
  id: string
  /** Background class defined in assets/style.css (e.g. 'sea', 'turkey'). */
  photoClass: string
  lang: 'el' | 'en'
  /** 'light' = white text on a darkening scrim; 'dark' = ink text on a lightening scrim. */
  textTone: 'light' | 'dark'
  kind: 'intro' | 'poem' | 'about'
  title?: string
  subtitle?: string
  author?: string
  /** Font class for the author byline (defaults to the body font). */
  authorFont?: string
  /** Prose paragraphs for the intro section. */
  intro?: string[]
  /** Poem lines; an empty string marks a stanza break. */
  lines?: string[]
  /** Font class for the heading (from assets/style.css). */
  fontHeading: string
  /** Font class for the body. */
  fontBody: string
  /** Font specimen links shown in the attribution pill. */
  attribution: PoemFont[]
}

const specimen = (name: string): PoemFont => ({
  name,
  href: `https://fonts.google.com/specimen/${name.replace(/\s+/g, '+')}`,
})

export const poems: Poem[] = [
  {
    id: 'arxi',
    photoClass: 'sea',
    lang: 'el',
    textTone: 'dark',
    kind: 'intro',
    title: 'Ελληνικά Fonts από την Google',
    intro: [
      'Η Google έχει δημιουργήσει μία πολύ χρήσιμη βιβλιοθήκη με γραμματοσειρές τις οποίες μπορεί κανείς να χρησιμοποιήσει στην ιστοσελίδα του, όμως ο μικρός αριθμός τους για την Ελληνική γλώσσα περιορίζει τις δυνατότητες συνδιασμών μεταξύ τους.',
      'Σ’ αυτή τη σελίδα θα προσπαθήσω να αναδείξω τους καλύτερους συνδυασμούς γραμματοσειρών για να χρησιμοποιήσετε στο site σας.',
    ],
    fontHeading: 'ubuntu',
    fontBody: 'roboto-slab',
    attribution: [specimen('Ubuntu'), specimen('Roboto Slab')],
  },
  {
    id: 'monogramma',
    photoClass: 'turkey',
    lang: 'el',
    textTone: 'light',
    kind: 'poem',
    title: 'Το μονόγραμμα',
    author: 'Οδυσσέας Ελύτης',
    lines: [
      'Επειδή το αδοκίμαστο και το απ’ αλλού φερμένο',
      'Δεν τ’ αντέχουν οι άνθρωποι κι είναι νωρίς, μ’ ακούς',
      'Είναι νωρίς ακόμη μες στον κόσμο αυτόν αγάπη μου',
      'Να μιλώ για σένα και για μένα',
      'Είναι νωρίς ακόμη μες στον κόσμο αυτόν, μ’ ακούς',
      'Δεν έχουν εξημερωθεί τα τέρατα, μ’ ακούς',
    ],
    fontHeading: 'caudex',
    fontBody: 'fira-sans',
    attribution: [specimen('Caudex'), specimen('Fira Sans')],
  },
  {
    id: 'fotia',
    photoClass: 'smoke',
    lang: 'el',
    textTone: 'light',
    kind: 'poem',
    title: 'Το κήρυγμα της φωτιάς',
    subtitle: 'Έλιοτ, σε μετάφραση του Γιώργου Σεφέρη',
    lines: [
      'Αλλά πίσω απ’ τη ράχη μου ακούω σε μια παγωμένη ριπή',
      'Το κροτάλισμα των κοκάλων, και το πνιγμένο γέλιο ν’ απλώνεται στην ακοή.',
      'Ένα ποντίκι γλίστρησε απαλά μέσα στη βλάστηση',
      'Τη λασπερή του σέρνοντας κοιλιά στην όχθη',
      'Εκεί που ψάρευα στο μουντό κανάλι',
      'Ένα χειμωνιάτικο δειλινό πίσω απ’ το Γκάζι',
      'Ρεμβάζοντας πάνω στου βασιλιά αδελφού μου το ναυάγιο,',
      'Πάνω στου βασιλιά πατέρα μου το θάνατο, πριν από εκείνον.',
      'Λευκά κορμιά γυμνά στο έδαφος το χαμηλό το νοτισμένο',
      'Ριγμένα κόκαλα σε χαμηλή μικρή ξερή σοφίτα,',
      'Κροταλισμένα από του ποντικού το πόδι μόνο, χρόνο με χρόνο.',
      'Αλλά πίσω απ’ τη ράχη μου φορές-φορές ακούω',
      'Ήχους σαλπίγγων κι αυτοκινήτων, που θα φέρουν',
      'Τον Σουήνη στην Κυρία Πόρτερ την άνοιξη.',
    ],
    fontHeading: 'tinos',
    fontBody: 'ubuntu-condensed',
    attribution: [specimen('Tinos'), specimen('Ubuntu Condensed')],
  },
  {
    id: 'selinofoto',
    photoClass: 'moonlight',
    lang: 'el',
    textTone: 'light',
    kind: 'poem',
    title: 'Ἡ σονάτα τοῦ σεληνόφωτος',
    author: 'Γιάννης Ρίτσος',
    authorFont: 'jura',
    lines: [
      'Ἀνοιξιάτικο βράδι. Μεγάλο δωμάτιο παλιοῦ σπιτιοῦ. Μιὰ ἡλικιωμένη γυναίκα ντυμένη στὰ μαῦρα μιλάει σ᾿ ἕναν νέο. Δὲν ἔχουν ἀνάψει φῶς. Ἀπ᾿ τὰ δυὸ παράθυρα μπαίνει ἕνα ἀμείλικτο φεγγαρόφωτο. Ξέχασα νὰ πῶ ὅτι ἡ γυναίκα μὲ τὰ μαῦρα ἔχει ἐκδώσει δυό-τρεῖς ἐνδιαφέρουσες ποιητικὲς συλλογὲς θρησκευτικῆς πνοῆς. Λοιπόν, ἡ Γυναίκα μὲ τὰ μαῦρα μιλάει στὸν νέο.',
    ],
    fontHeading: 'didot',
    fontBody: 'ubuntu',
    attribution: [specimen('GFS Didot'), specimen('Ubuntu')],
  },
  {
    id: 'oso-mporeis',
    photoClass: 'new-york',
    lang: 'el',
    textTone: 'light',
    kind: 'poem',
    title: 'Όσο Μπορείς',
    author: 'Κωνσταντίνος Καβάφης',
    authorFont: 'didot',
    lines: [
      'Κι αν δεν μπορείς να κάμεις την ζωή σου όπως την θέλεις,',
      'τούτο προσπάθησε τουλάχιστον',
      'όσο μπορείς: μην την εξευτελίζεις',
      'μες στην πολλή συνάφεια του κόσμου,',
      'μες στες πολλές κινήσεις κι ομιλίες.',
      '',
      'Μην την εξευτελίζεις πηαίνοντάς την,',
      'γυρίζοντας συχνά κ’ εκθέτοντάς την',
      'στων σχέσεων και των συναναστροφών',
      'την καθημερινήν ανοησία,',
      'ώς που να γίνει σα μια ξένη φορτική.',
    ],
    fontHeading: 'open-sans',
    fontBody: 'advent-pro',
    attribution: [specimen('Open Sans'), specimen('GFS Didot'), specimen('Advent Pro')],
  },
  {
    id: 'i-polis',
    photoClass: 'likavitos',
    lang: 'el',
    textTone: 'light',
    kind: 'poem',
    title: 'Ἡ Πόλις',
    author: 'Κωνσταντίνος Καβάφης',
    authorFont: 'open-sans',
    lines: [
      'Εἶπες· «Θὰ πάγω σ’ ἄλλη γῆ, θὰ πάγω σ’ ἄλλη θάλασσα.',
      'Μιὰ πόλις ἄλλη θὰ βρεθεῖ καλλίτερη ἀπ’ αὐτή.',
      'Κάθε προσπάθειά μου μιὰ καταδίκη εἶναι γραφτή·',
      'κ’ εἶν’ ἡ καρδιά μου —σὰν νεκρός— θαμένη.',
      'Ὁ νοῦς μου ὣς πότε μὲς στὸν μαρασμὸν αὐτὸν θὰ μένει.',
      'Ὅπου τὸ μάτι μου γυρίσω, ὅπου κι ἂν δῶ',
      'ἐρείπια μαῦρα τῆς ζωῆς μου βλέπω ἐδῶ,',
      'ποῦ τόσα χρόνια πέρασα καὶ ρήμαξα καὶ χάλασα.»',
      '',
      'Καινούργιους τόπους δὲν θὰ βρεῖς, δὲν θἄβρεις ἄλλες θάλασσες.',
      'Ἡ πόλις θὰ σὲ ἀκολουθεῖ. Στοὺς δρόμους θὰ γυρνᾶς',
      'τοὺς ἴδιους. Καὶ στὲς γειτονιὲς τὲς ἴδιες θὰ γερνᾶς·',
      'καὶ μὲς στὰ ἴδια σπίτια αὐτὰ θ’ ἀσπρίζεις.',
      'Πάντα στὴν πόλι αὐτὴ θὰ φθάνεις. Γιὰ τὰ ἀλλοῦ —μὴ ἐλπίζεις—',
      'δὲν ἔχει πλοῖο γιὰ σέ, δὲν ἔχει ὁδό.',
      'Ἔτσι ποῦ τὴ ζωή σου ρήμαξες ἐδῶ',
      'στὴν κώχη τούτη τὴν μικρή, σ’ ὅλην τὴν γῆ τὴν χάλασες.',
    ],
    fontHeading: 'didot',
    fontBody: 'open-sans',
    attribution: [specimen('GFS Didot'), specimen('Open Sans')],
  },
  {
    id: 'keria',
    photoClass: 'old-london',
    lang: 'el',
    textTone: 'light',
    kind: 'poem',
    title: 'Κεριά',
    author: 'Κωνσταντίνος Καβάφης',
    authorFont: 'open-sans',
    lines: [
      'Τοῦ μέλλοντος ἡ μέρες στέκοντ’ ἐμπροστά μας',
      'σὰν μιὰ σειρὰ κεράκια ἀναμένα —',
      'χρυσᾶ, ζεστά, καὶ ζωηρὰ κεράκια.',
      '',
      'Ἡ περασμένες μέρες πίσω μένουν,',
      'μιὰ θλιβερὴ σειρὰ κεριῶν σβυσμένων·',
      'τὰ πιὸ κοντὰ βγάζουν καπνὸν ἀκόμη,',
      'κρύα κεριά, λυωμένα, καὶ κυρτά.',
      '',
      'Δὲν θέλω νὰ τὰ βλέπω· μὲ λυπεῖ ἡ μορφή των,',
      'καὶ μὲ λυπεῖ τὸ πρῶτο φῶς των νὰ θυμοῦμαι.',
      'Ἐμπρὸς κυττάζω τ’ ἀναμένα μου κεριά.',
      'Δὲν θέλω νὰ γυρίσω νὰ μὴ δῶ καὶ φρίξω',
      'τί γρήγορα ποῦ ἡ σκοτεινὴ γραμμὴ μακραίνει,',
      'τί γρήγορα ποῦ τὰ σβυστὰ κεριὰ πληθαίνουν.',
    ],
    fontHeading: 'tinos',
    fontBody: 'open-sans',
    attribution: [specimen('Tinos'), specimen('Open Sans')],
  },
  {
    id: 'plithintikos',
    photoClass: 'night',
    lang: 'el',
    textTone: 'light',
    kind: 'poem',
    title: 'Πληθυντικός αριθμός',
    author: 'Κική Δημουλά',
    authorFont: 'didot',
    lines: [
      'Η νύχτα,',
      'όνομα ουσιαστικόν, γένους θηλυκού,',
      'ενικός αριθμός.',
      'Πληθυντικός αριθμός',
      'οι νύχτες.',
      'Οι νύχτες από δω και πέρα.',
    ],
    fontHeading: 'jura',
    fontBody: 'roboto',
    attribution: [specimen('Jura'), specimen('Roboto'), specimen('GFS Didot')],
  },
  {
    id: 'olympiakos',
    photoClass: 'olympos',
    lang: 'el',
    textTone: 'light',
    kind: 'poem',
    title: 'Ολυμπιακός Ύμνος',
    author: 'Κωστής Παλαμάς',
    authorFont: 'cardo',
    lines: [
      'Αρχαίο πνεύμ’ αθάνατον, αγνέ πατέρα',
      'του ωραίου, του μεγάλου και του αληθινού,',
      'κατέβα, φανερώσου κι άστραψε εδώ πέρα',
      'στη δόξα της δικής σου γης και τ’ ουρανού.',
    ],
    fontHeading: 'didot',
    fontBody: 'cardo',
    attribution: [specimen('GFS Didot'), specimen('Cardo')],
  },
  {
    id: 'anoixi',
    photoClass: 'grass',
    lang: 'el',
    textTone: 'light',
    kind: 'poem',
    title: 'Οι Ελεύθεροι Πολιορκημένοι',
    author: 'Διονύσιος Σολωμός',
    authorFont: 'fira-sans',
    lines: [
      'Ο Απρίλης με τον Έρωτα χορεύουν και γελούνε,',
      'κι’ όσ’ άνθια βγαίνουν και καρποί τόσ’ άρματα σε κλειούνε.',
      '',
      'Λευκό βουνάκι πρόβατα κινούμενο βελάζει,',
      'και μες στη θάλασσα βαθιά ξαναπετιέται πάλι,',
      'κι’ ολόλευκο εσύσμιξε με τ’ ουρανού τα κάλλη.',
      'Και μες στης λίμνης τα νερά, όπ’ έφθασε μ’ ασπούδα,',
      'έπαιξε με τον ίσκιο της γαλάζια πεταλούδα,',
      'που ευώδιασε τον ύπνο της μέσα στον άγριο κρίνο·',
      'το σκουληκάκι βρίσκεται σ’ ώρα γλυκιά κι’ εκείνο.',
      'Μάγεμα η φύσις κι’ όνειρο στην ομορφιά και χάρη,',
      'η μαύρη πέτρα ολόχρυση και το ξερό χορτάρι.',
    ],
    fontHeading: 'cardo',
    fontBody: 'fira-sans',
    attribution: [specimen('Cardo'), specimen('Fira Sans')],
  },
]
