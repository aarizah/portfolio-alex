# AI Caloric Estimator — CV + Embedded Prototype

## The Challenge

Manual calorie tracking was highly inaccurate (often >100% error) and impractical for everyday meals.

Traditional calorie counting apps relied on:
- **Manual food logging** with inconsistent portion estimates
- **Generic database values** that didn't match real portions
- **User frustration** leading to abandoned tracking
- **Cumulative errors** that made long-term tracking meaningless

The core problem: humans are terrible at estimating portion sizes and food weights visually.

## Our Hardware + AI Solution

Built an ESP32-S3 device with camera + load cell, FreeRTOS/C++ client, and OpenAI API + Node/Express backend to fuse image + weight signals for calorie estimation.

### Technical Implementation

**Hardware Stack:**
- **ESP32-S3** microcontroller with WiFi capabilities
- **High-resolution camera** for food image capture
- **Precision load cell** for accurate weight measurement
- **Custom PCB design** for compact form factor

**Firmware:**
- **FreeRTOS** real-time operating system
- **C++** for low-level hardware control
- **WiFi communication** for cloud processing
- **Power management** for battery optimization

**Backend Processing:**
- **Computer Vision API** (OpenAI Vision) for food identification
- **Weight correlation** algorithms for portion accuracy
- **Nutritional database** with density mappings
- **Node.js + Express** backend architecture

### Data Fusion Algorithm

The magic happens in combining two data streams:
1. **Visual analysis**: Food type, apparent portion size, preparation method
2. **Weight measurement**: Precise mass in grams
3. **Density correlation**: Match visual volume to actual weight
4. **Nutritional calculation**: Accurate calorie estimate based on real weight

## The Results

Reduced estimation error from >100% to ~10% on non-complex meals by combining CV and weight data.

### Performance Metrics

- **Error Reduction**: From >100% to ~10% average error
- **Signal Fusion**: Image + weight data correlation
- **Real-time Processing**: Sub-3-second analysis
- **Battery Life**: 2+ weeks on single charge
- **Accuracy Improvement**: 10x better than manual estimation

### User Experience

- **Zero manual input**: Just place food and capture
- **Instant results**: Calories displayed immediately
- **Learning system**: Improves accuracy over time
- **Seamless tracking**: No more guessing or database searching

The device transforms calorie tracking from a tedious chore into an effortless, accurate process that people actually want to use consistently.