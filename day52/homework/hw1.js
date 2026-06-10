let username = prompt("შეიყვანე მომხმარებლის სახელი:");

if (!username) {
    console.log("შესვლა ვერ მოხერხდა");
} else {
    console.log("მოგესალმები, " + username);
}