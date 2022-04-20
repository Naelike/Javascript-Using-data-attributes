# Javascript-Using-data-attributes
HTML5 ได้รับการออกแบบโดยคำนึงถึงความสามารถในการขยายสำหรับข้อมูลที่ควรเชื่อมโยงกับองค์ประกอบเฉพาะแต่ไม่จำเป็นต้องมีความหมายที่กำหนดไว้ แอตทริบิวต์ data-* ช่วยให้เราสามารถจัดเก็บข้อมูลเพิ่มเติมเกี่ยวกับองค์ประกอบ HTML แบบมาตรฐานและเชิงความหมาย โดยไม่ต้องมีการแฮ็กอื่นๆ เช่น แอตทริบิวต์ที่ไม่ได้มาตรฐาน หรือคุณสมบัติพิเศษบน DOM

# HTML 
ไวยากรณ์เป็นเรื่องง่าย คุณลักษณะใด ๆ ในองค์ประกอบใด ๆ ที่มีชื่อแอตทริบิวต์ขึ้นต้นด้วย data- เป็นแอตทริบิวต์ข้อมูล สมมติว่าคุณมีบทความและต้องการเก็บข้อมูลพิเศษบางอย่างที่ไม่มีการแสดงภาพ เพียงใช้แอตทริบิวต์ข้อมูลสำหรับสิ่งนั้น:
```
<div id="electricCars" data-columns="3" data-index-number="12314" data-parent="cars">
  Naelike ...!
</div>
```

# JavaScript
การอ่านค่าของแอตทริบิวต์เหล่านี้ใน JavaScript นั้นง่ายมากเช่นกัน คุณสามารถใช้ getAttribute() กับชื่อ HTML แบบเต็มเพื่ออ่าน แต่มาตรฐานกำหนดวิธีที่ง่ายกว่า: DOMStringMap ที่คุณสามารถอ่านผ่านคุณสมบัติชุดข้อมูล

ในการรับแอตทริบิวต์ข้อมูลผ่านออบเจ็กต์ชุดข้อมูล ให้รับคุณสมบัติตามส่วนของชื่อแอตทริบิวต์หลัง data- (โปรดทราบว่าขีดกลางจะถูกแปลงเป็น camelCase)

```
<script type="text/javascript">
  // querySelector ID tag
  const articleGet = document.querySelector('#electricCars');
  // get tag data
  var getColumns = articleGet.dataset.columns;
  console.log(getColumns);
  var getIndexNumber = articleGet.dataset.indexNumber;
  console.log(getIndexNumber);
  var getParent = articleGet.dataset.parent;
  console.log(getParent);
</script>
```

# Developer : NaeLike เนไลก์

<img class="rounded" src="http://img.in.th/images/c938fdabdf2a1d4b2deda8ffea4fa189.jpg" width="120" alt="NaeLike"> 

> Naelike เนไลก์

@เว็บไซต์ :+1: Web :  <https://naelike.com> ..! :shipit:
<br>
@ติดตาม :+1: Web :  <https://naelike.com/addmee> ..! :shipit:

TikTok :  <https://www.tiktok.com/@naelike6564>
<br>
Facebook :  <https://web.facebook.com/NaeLikePage>
<br>
Instagram :  <https://www.instagram.com/naelike_ig>
<br>


<a href="https://link.ckpzmc.xyz/dispnae"> 
   <img class="rounded" src="https://i.pinimg.com/originals/1a/9a/f1/1a9af177bdcd0bd93568e59bb7600cbe.png" width="120" alt="NaeLike"> 
   </br>
   <b class="fs-12">Discord คลิก..!</b> 
</a>
