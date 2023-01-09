---
title: TCP和UDP区别
tags: [network]
---

## TCP和UDP区别

- TCP需要建立连接(三次握手)，UDP不需要
- TCP是面向连接协议，UDP是无连接协议
- TCP可靠（丢包自动重传），UDP不可靠（丢包后不会自动重传）
- TCP有序，UDP无序，传输过程中可能乱序，TCP会进行排序，而UDP不会
- TCP无界，UDP有界，TCP通过字节流方式传输，UDP每个包是独立的
- TCP开销较大，TCP头部需要20字节，UDP头部只要8个字节
- TCP比UDP要慢，因为TCP需要建立连接，保证可靠性和有序性
