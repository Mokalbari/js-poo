# Les travaux d'Hercule - premier travail : le lion de Némée

Prérequis : cloner ce _dépôt_.

## Les bases

Héraclès doit vaincre le féroce Lion de Némée, connu pour sa peau impénétrable, ce qui le rend très difficile à blesser. Avant de commencer sa quête, notre héros devrait se préparer un peu :

Dans le fichier vide _src/Fighter.js_ crée :

- une constante `MAX_LIFE = 100`: les combattants possèdent 100 points de vie max.

- une classe `Fighter` avec les propriétés :
- name: le nom du combattant.
- strength: sera utilisé pour calculer les points de dommage durant l'attaque.
- dexterity: sera utilisé pour calculer les points de défense qui limiteront les dommages reçus durant l'attaque.
- life: initialisés à MAX_LIFE, les combattants commenceront avec 100 points de vie.

Il y aura potentiellement plein d'autres fonctionnalités à ajouter, mais c'est un bon début !

Donc, dans le fichier _index.js_ fourni, créer deux instances de la classe Figther, pour :

- 🧔 Heracles, strength 20, dexterity 6

- 🦁 Nemean Lion, strength 11, dexterity 13

Pour donner un meilleur look même si vous travaillez dans la console, vous pouvez ajouter une icône dans la chaîne de caractères (= string) (https://emojipedia.org/).
Vous pouvez aussi vous amuser à changer les valeurs des variables, mais celles fournies donneront un combat équilibré.

> 💡**ASTUCE**: un _constructor_ sera requis dans votre classe pour initialiser ces propriétés avec différentes valeurs pour Héraclès et le Lion.

> 💡**ASTUCE**: n'oubliez pas de _require_ le fichier _Fighter.js_ si vous voulez pouvoir l'utiliser dans votre fichier _index.js_.

Après que les deux aient été instanciés, affichez le nom et la vie 💙 (vous devriez commencer à 100) pour chacun des combattants afin de vous assurer que tout fonctionne. Pour l'instant, vous utiliserez JS seulement en mode CLI.
Pour cela, tapez simplement : `node index.js` dans votre terminal.

## COMBATTEZ !

Héraclès s’échauffe un peu, resserre ses muscles, écrase quelques rochers à mains nues. Il est prêt à se battre !

Dans la classe Fighter, créez une méthode `fight()` qui vous permet d'attaquer l'ennemi. Pour déterminer qui vous attaquez, la méthode `fight()` prend un objet _Fighter_ comme paramètre ! Dans le corps de la méthode, vous calculerez en premier les points de dommage de l'attaquant :

- Le combattant frappera avec plus ou moins de succès, la quantité de dommage infligé par l' **attaquant** sera aléatoire entre 1 et sa _strength_ (Utilise `Math.random()`([Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) Pour d'autres conseils, voir [article] (https://dev.to/rocambille/how-to-roll-a-dice-in-javascript-51j0)).

- Mais le défenseur peut se défendre ou esquiver ! Pour cela, mitigez les dommages en leur soustrayant la _dexterity_ du **défenseur** (sans jamais **descendre en dessous de zéro**).

- une fois les dommages calculés, réduisez le nombre de points de vie du **défenseur** par la valeur précédemment obtenue. Faites attention : les points de vie du défenseur **ne peuvent tomber en dessous de zéro**, rappelez vous bien de ça.

En résumé :

**nouveaux points de vies du défenseur = points de vie actuels du défenseur - (dommages de l'attaquant - dextérité du défenseur)**

En sachant que `(attacker's dommage - defender's dexterity)` ne peut pas être négatif.

C'est parti, votre classe est prête, vous n'avez plus qu'à vous en servir !

## 🗡️ Il n'en restera qu'un

Héraclès entre dans la grotte, le Lion est là, ses yeux rouges pointés sur vous. Le combat est imminent :

1. Dans le fichier index.js créer une boucle exécutant un combat à mort ! Tant qu'un des combattants possède des points de vie > 0, le combat continue.

2. Pour chaque "round" 🕛 Héraclès attaque le Lion, puis le Lion l'attaque en retour. Tu dois afficher le numéro du round, qui attaque qui et les points de vie restants.

3. Quand l'un des deux est défait, tu dois donc afficher le vainqueur 🏆 et le perdant 💀. La capture d'écran en dessous vous donne un aperçu de nos attentes.

![instructions](instructions.png)

🎁 BONUS : créer une méthode `isAlive()` pour optimiser ton code.

## Conclusion

Une fois terminé, vous êtes libre de modifier le code et de rajouter de nouvelles fonctionnalités. Nous vous donnerons un code propre pour le début du prochain atelier.


//

# Travaux d'Héraclès #2 : le sanglier d'Érymanthe

Prérequis : cloner ce _dépôt_.

## État des lieux du projet

Héraclès doit maintenant vaincre le sanglier d'Érymanthe 🐗, énorme bête qui terrifie les habitants du mont Erymanthe en Arcadie.

## À toi de jouer : Un peu d'équipement pour attaquer

Les caractéristiques de force et de dextérité du sanglier sont bien supérieures aux tiennes, impossible de le battre dans ces conditions, tes poings ne suffiront pas ! Il va falloir que tu t'équipes en conséquence !

Tout d'abord, il va falloir t'ajouter une épée.

1. Créé une nouvelle classe `Weapon` dans le dossier *src/*.
2. Celle-ci va correspondre à l'arme dont tu vas équiper les combattants. Elle doit avoir un nom et une propriété `damage` initialisée à 10.
3. Pour ajouter l'arme au personnage, dans la classe `Fighter`, on crée une propriété `weapon`. Celle-ci sera initialisée à `null`.
4. Dans le fichier *index.js*, instancie un objet de type `Weapon` avec le nom "Épée", un dommage de 10. Ensuite associe-le à Héraclès.
5. Pour le moment, l'épée a été attribuée mais elle ne t'apporte aucun avantage. Retourne dans la class `Fighter`, nous allons modifier un peu le comportement de la méthode `fight()`.
Créé tout d'abord une méthode `getDamage()`. Celle-ci doit retourner la force (*strength*) du Fighter, à laquelle tu vas ajouter les dommages provenant de l'arme (dans le cas où il en porte une).
6. Dans la méthode `fight()`, utilise cette méthode `getDamage()` pour déterminer les dégâts infligés par le combattant. Ainsi les dégâts infligés (via le `rand()`) seront compris entre 1 et `getDamage()` (la force + les dégâts de l'arme) et non plus juste la force.

> Tout ce calcul pourrait être réalisé directement dans `fight()`, mais l'utilisation de la méthode `getDamage()` permet de simplifier la méthode `fight()` et de déporter la logique de calcul des dommages ailleurs. De plus, il est maintenant possible d'utiliser `getDamage()` indépendamment de `fight()`, ce qui sera utile par la suite.


## Et la défense dans tout ça ?

Tu vas refaire quasiment la même chose pour gérer cette fois-ci un bouclier. Les étapes sont ici volontairement données dans les grandes lignes.

1. Créé une classe `Shield` avec une propriété `protection` initialisée à 10.
2. Dans `Fighter`, ajoute une propriété `shield`. 
3. Puis créé une méthode `getDefense()`, additionnant la dextérité et la protection du bouclier (si le héros en porte un). Cette méthode sera également utilisée dans `fight()` (à la place du simple appel à `defender.dexterity`) afin que le bouclier puisse jouer son rôle protecteur.
4. Comme pour l'arme, pense à instancier un bouclier et à l'associer à Héraclès.


## Prêt au combat.

Relance le combat avec `node index.js`, tu fais maintenant beaucoup plus de dégâts et tu es mieux protégé, tu devrais gagner le combat sans trop de difficultés !
