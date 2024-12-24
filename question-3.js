/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) เพราะเป็นการใช้ for loop ในการเข้าถึงสมาชิกใน array ทุกตัว 



*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n) เพราะในการค้นหาทุกครั้ง มีการแบ่งครึ่ง array


*/

/* 
Which function is more efficient and why?
Answer: function findProductPrice  มีประสิทธิภาพมากกว่า เนื่องจากมีการจัดเรียงแบ่งครึ่งข้อมูลก่อนค้นหา ทำให้เกิดจำนวนรอบในการค้นหาที่น้อยกว่าและใช้เวลาน้อยกว่า function findStudentById 
ที่ใช้จำนวนรอบการค้นหาที่มากกว่าตามจำนวนของข้อมูลใน array และต้องมีการเข้าถึงทุกข้อมูลใน array อย่างน้อย 1 รอบ


*/
