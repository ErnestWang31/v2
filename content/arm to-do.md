#### Mechanical Design
- [x] First prototype - Finished
- [ ] Hardware integration
### Stepper Motor/Driver:
#### Mechanical
- [ ] Gear Reducer
	- [ ] Harmonic vs Cycloidal - **In design**
#### Hardware
- [x] Stepper Motor Selection - NEMA 17 
- [x] Microcontroller/DSP
- [ ] Current Sensing Mechanism for FOC - **in Progress**
	- ADC 
- [x] Hall Sensor for Feedback and Closed-Loop [[]]
- [ ] Power Stage - **in Progress**
	- MOSFET/IGBTs
	- H-Bridge
	- Thermal Management
- [ ] Gate Driver
- [ ] DC to DC converter
- [ ] Protection Circuits
#### Software
- [ ] FOC - **in Progress**
- [ ] PID Control - **in Progress**
- [ ] Communication - CAN Bus - **in Progress**
### Controller
#### Hardware
- [x] Microcontroller - [[STM32F4]] -> [[Datasheet_stm32f407x.pdf]]
	- [ ] With ESP32 - thinking aout integration - **in Progress**
- [ ] NRF24L01 for 2.4 GHz Wireless Comm - **in Progress** - need researching
- [x] Power
	- [x] DC-DC
- [x] Comm
	- [x] CAN
	- [x] BLE
#### Software
- [ ] Architecture Design - **in Progress**
- [ ] Sensor Data Processing - TODO
- [ ] PID Algorithm for robotic positioning **in Progress**
- [ ] communication protocol implementaiton - **in Progress**
- [ ] UI - TODO
	- [ ] CLI... - need researching
