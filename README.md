[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/NrqNBT2c)
# workshop2-assignemnet

1) შექმენით ორი კომპონენტი Parent და Child(სახელები შეგიძლიათ შეცვალოთ):
Parent კომპონენტმა უნდა ჩააწოდოს Child კომპონენტს იუზერების მასივი( ობიექტების მასივი, სადაც თითოეული ობიექტი შეიცავს იუზერის სახელს,ასაკს,გვარს და აიდის), თუმცა მასივი შეიძლება ცარიელი იყოს.ასევე Child კომპონენტმა უნდა მიიღოს მეორე boolean prop-ი: isUserLoggedIn.
თუ იუზერი დალოგინებულია(isUserLoggedIn=true) Child კომპონენტმა უნდა დაარენდეროს იუზერების შესახებ ინფორმაცია(სახელი,გვარი ასაკი)  ხოლო თუ იუზერების მასივი ცარიელია უნდა გამოიტანოს ტექსტი: no users in the system.
თუ იუზერი არ არის დალოგინებული Child კომპონენტმა უნდა გამოიტანოს ტექსტი:you are not authorized to see user list.

2) შექმენით Wrapper,Navbar და Footer კომპონენტები. Navbar-ში და Footer-ში შეგიძლია უბრალოდ ტექსტიც გამოიტანოთ. Wrapper კომპონენტმა უნდა დაარენდეროს Navbar და Footer კომპონენტები, ხოლო მათ შორის ყველა children,რომელსაც Wrapper-ი მიიღებს. გამოიყენეთ Wrapper კომპონენტი ისე,რომ აპლიკაციაში ნებისმიერ ადგილას დამატებული კომპონენტი მოქცეული იყოს navbar-სა და footer-ს შორის.


