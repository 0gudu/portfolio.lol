const tooltip = document.getElementById("tooltip");

    const curiosities = [
        "Did you know? Bananas are berries, but strawberries are not!",
        "Did you know? Honey never spoils; edible honey was found in ancient Egyptian tombs.",
        "Did you know? Octopuses have three hearts!",
        "Did you know? Cows have best friends and can get stressed when separated.",
        "Did you know? The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Did you know? Humans share 60% of their DNA with bananas!",
        "Did you know? A day on Venus is longer than a year on Venus.",
        "Did you know? Some turtles can breathe through their butts.",
        "Did you know? The inventor of the Pringles can is now buried in one.",
        "Did you know? Water can boil and freeze at the same time, under certain conditions known as the 'triple point'.",
        "¿Sabías que? Las bananas son bayas, ¡pero las fresas no lo son!",
        "¿Sabías que? La miel nunca se echa a perder; se encontró miel comestible en tumbas egipcias antiguas.",
        "¿Sabías que? Los pulpos tienen tres corazones!",
        "¿Sabías que? Las vacas tienen mejores amigos y pueden estresarse si se separan.",
        "¿Sabías que? El ser humano comparte un 60% de su ADN con los plátanos!",
        "¿Sabías que? Un día en Venus es más largo que un año en Venus.",
        "Wusstest du? Bananen sind Beeren, aber Erdbeeren sind es nicht!",
        "Wusstest du? Honig verdirbt nie; essbarer Honig wurde in alten ägyptischen Gräbern gefunden.",
        "Wusstest du? Oktopusse haben drei Herzen!",
        "Wusstest du? Kühe haben beste Freunde und können gestresst werden, wenn sie getrennt sind.",
        "Wusstest du? Menschen teilen 60% ihrer DNA mit Bananen!",
        "Wusstest du? Ein Tag auf der Venus ist länger als ein Jahr auf der Venus.",
        "你知道吗？香蕉是浆果，但草莓不是！",
        "你知道吗？蜂蜜永远不会变质; 在古埃及的墓穴中发现了可食用的蜂蜜。",
        "你知道吗？章鱼有三颗心！",
        "你知道吗？奶牛有最好的朋友，当它们分开时会感到压力。",
        "你知道吗？人类的DNA有60%与香蕉相同！",
        "你知道吗？金星上的一天比一年还长。",
        "Saviez-vous que? Les bananes sont des baies, mais les fraises ne le sont pas!",
        "Saviez-vous que? Le miel ne se gâte jamais; du miel comestible a été trouvé dans des tombes égyptiennes anciennes.",
        "Saviez-vous que? Les poulpes ont trois cœurs!",
        "Saviez-vous que? Les vaches ont des meilleurs amis et peuvent être stressées quand elles sont séparées.",
        "Saviez-vous que? Les humains partagent 60% de leur ADN avec les bananes!",
        "Saviez-vous que? Une journée sur Vénus est plus longue qu'une année sur Vénus."
    ];


    function Curiosity() {
        const randomIndex = Math.floor(Math.random() * curiosities.length);
        tooltip.innerText = curiosities[randomIndex];
        tooltip.style.opacity = 1;

        setTimeout(() => {
            tooltip.style.opacity = 0;
        }, 4000);
    }

    setInterval(showCuriosity, 17000);

    showCuriosity();