CREATE TABLE mountainParts (
    partID SERIAL PRIMARY KEY ,
    id INT,
    frame VARCHAR(120),
    fork VARCHAR(120),
    shock VARCHAR(120),
    bb VARCHAR(120),
    frontDer VARCHAR(120),
    rearDer VARCHAR(120),
    shfiters VARCHAR(120),
    crankset VARCHAR(120),
    chain VARCHAR(120),
    cassette VARCHAR(120),
    brakes VARCHAR(120), 
    brakelevers VARCHAR(120),
    wheels VARCHAR(120),
    tires VARCHAR(120),
    handlebar VARCHAR(120),
    stem VARCHAR(120),
    saddle VARCHAR(120),
    seatpost VARCHAR(120), 
    headset VARCHAR(120),
    FOREIGN KEY (id) REFERENCES mountain(id)
)

INSERT INTO mountainParts 
(id, frame, fork, shock, bb, frontDer, rearDer, shifters,
brakes, brakelevers, wheels, tires, handlebar, stem, saddle,
seatpost, headset)
VALUES (1, 'Habit 27.5, 120mm, BallisTec Carbon',
 'RockShox Pike RC 130mm', 'Fox Float DPS Performance EVOL SV',
  'Cannondale Alloy PressFit30', 'none', 'Shimano XT, 11-speed Shadow Plus', 'Shimano SLX, 11-speed', 
  'Shimano Deore M6000 hydro disc, 180/160mm', 'Shimano Deore M6000', 
  'WTB STP i23 TCS', 'Schwalbe Nobby Nic Performance 27.5', 
  'Cannondale C3 riser, Alloy, 4° upsweep, 9° backsweep, 760x15mm', 
  'Cannondale C3, 6061 Alloy, 1-1/8", 31.8, 5°',
'Fabric Scoop Radius', 'TransX Dropper Post, 31.6, 120mm drop, internal routing', 
'Cannondale HeadShok Si')