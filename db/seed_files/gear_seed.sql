CREATE TABLE gear (
    gearid SERIAL PRIMARY KEY,
    title varchar(200),
    color varchar(100),
    partNumber varchar(50),
    gender varchar(20),
    price numeric(10,2),
    discount numeric(10,2),
    type varchar(20),
    subtype varchar(50),
    bikeType varchar(30),
    picture varchar(250)
)
INSERT INTO gear (
    title, color, partnumber, gender, price, discount, type, subtype, bikeType, picture
)
values (
    'Mavic Womens Zoya Autobahn', 'Pewter, Cement Blue',
    '30010428', 'Womens', 100.00, 50.00, 'gear', 'shoes', 'mountain', 
    'http://icimg.com/img_zoya_auto_pew_blu.JPG'
),
 ('Mavic 2013 Galibier', 'White, Black, Yellow',
 '30000335', 'Mens', 180.00, 90.00, 'gear', 'shoes', 'road', 
 'https://www.cannondaleexperts.com/thumbnail.asp?file=http://icimg.com/img_galibier_wht_blk_yel.JPG&maxx=50&maxy=0'),
 ('Fizik 3D Flex Moldable Cycling Insole', '',
  'F170060', '', 85.00, 34.00, 'gear', 'shoes', '',
  'https://www.cannondaleexperts.com/thumbnail.asp?file=https://icimg.com/f1700604.01.jpg&maxx=50&maxy=0'),
 ('Mavic Chasm MTB', 'White',
 '42chasm', 'Mens', 240.00, 72.00, 'gear', 'shoes', 'mountain',
 'https://www.cannondaleexperts.com/thumbnail.asp?file=https://icimg.com/42chasm.01.jpg&maxx=50&maxy=0'),
 ('Mavic Tri Helium Road', 'Yellow',
  '41trihelium', 'Mens', 350.00, 105.00, 'gear', 'shoes', 'road',
  'https://www.cannondaleexperts.com/thumbnail.asp?file=https://icimg.com/41trihelium.01.jpg&maxx=50&maxy=0'),
 ('Mavic Zoya MTB', 'Black',
  '40zoya', 'Womens', 100.00, 30.00, 'gear', 'shoes', 'mountain',
  'https://www.cannondaleexperts.com/thumbnail.asp?file=https://icimg.com/40zoya.01.jpg&maxx=50&maxy=0'),
 ('Mavic Swtichback MTB', 'Grey',
  '39switchback', 'Mens', 160.00, 48.00, 'gear', 'shoes', 'mountain',
  'https://www.cannondaleexperts.com/thumbnail.asp?file=https://icimg.com/39switchback.01.jpg&maxx=50&maxy=0'),
 ('Mavic Tri Race Road', 'White',
  '38trirace', 'Mens', 130.00, 39.00, 'gear', 'shoes', 'road',
  'https://www.cannondaleexperts.com/thumbnail.asp?file=https://icimg.com/38trirace.01.jpg&maxx=50&maxy=0'),
 ('Mavic Alpine XL MTB', 'White',
  '37alipinexl', 'Mens', 130.00, 39.00, 'gear', 'shoes', 'mountain',
  'https://www.cannondaleexperts.com/thumbnail.asp?file=https://icimg.com/37alpinexl.01.jpg&maxx=50&maxy=0'),
 ('Mavic Scorpio MTB', 'White',
  '36scorpio', 'Womens', 130.00, 39.00, 'gear', 'shoes', 'road',
  'https://www.cannondaleexperts.com/thumbnail.asp?file=https://icimg.com/36scorpio.01.jpg&maxx=50&maxy=0')
