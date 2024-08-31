### MCU:
![[Pasted image 20240331220744.png]]
- MCU: STM32F103CBT6
- Power: 
	- C6, C7, C8: decoupling capacitors to filter out high-frequency noise - ensuring stable power supply
	- C9: bypass capacitor for VBAT - for maintaining voltage stability for real-time clock
	- Separated AGND and GND to minimize noise interferencing analog signals
- MCU Core:
	- ARM Cortex-M3
	- SPI, UART, CAN, USB communication
- Communication
- I/O Pins
- User Interface - buttons
- SWDIO, SWCLK
- Clock System
	- Crystal Oscillator Circuit (PC14, PC15, C21, R19)
- Reset Circuit
### Dual H-bridge Motor Driver
![[Pasted image 20240331225449.png]]
### MT6816 Magnetic Sensor SPI communication Interface
![[Pasted image 20240331225529.png]]
### CAN Bus Interface
![[Pasted image 20240331225545.png]]
### Power Supply
![[Pasted image 20240331225559.png]]