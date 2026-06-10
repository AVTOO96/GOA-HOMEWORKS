let day = Number(prompt("შეიყვანე დღის ნომერი (1-7):"));

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("სამუშაო დღე");
        break;
    case 6:
    case 7:
        console.log("დასვენების დღე");
        break;
    default:
        console.log("არასწორი ნომერი");
}