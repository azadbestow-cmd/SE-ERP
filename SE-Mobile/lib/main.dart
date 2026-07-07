import 'package:flutter/material.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(MaterialApp(
  debugShowCheckedModeBanner: false,
  home: QrScannerScreen(),
));

class QrScannerScreen extends StatefulWidget {
  @override
  _QrScannerScreenState createState() => _QrScannerScreenState();
}

class _QrScannerScreenState extends State<QrScannerScreen> {
  final GlobalKey qrKey = GlobalKey(debugLabel: 'QR');
  QRViewController? controller;

  // Branding component - Logo + Name
  Widget _buildBranding() {
    return Row(
      children: [
        Image.asset('assets/images/logo.png', height: 30),
        SizedBox(width: 10),
        Text("SE-ERP"),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: _buildBranding(),
      ),
      body: Column(
        children: [
          Expanded(
            flex: 5,
            child: QRView(
              key: qrKey,
              onQRViewCreated: _onQRViewCreated,
            ),
          ),
          Expanded(
            flex: 1,
            child: Center(child: Text("SE Group - Machine Scanner")),
          )
        ],
      ),
    );
  }

  void _onQRViewCreated(QRViewController controller) {
    this.controller = controller;
    controller.scannedDataStream.listen((scanData) {
      controller.pauseCamera();
      _fetchMachineData(scanData.code!);
    });
  }

  Future<void> _fetchMachineData(String serial) async {
    final url = Uri.parse('http://10.0.2.2:3000/api/machine/qr/$serial');
    try {
      final response = await http.get(url);
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        _showResult(data);
      } else {
        _showError("Machine nahi mili!");
      }
    } catch (e) {
      _showError("Connection Error: $e");
    }
  }

  void _showResult(var data) {
    showDialog(
      context: context,
      builder: (_) => AlertDialog(
        title: Row(
          children: [
            Image.asset('assets/images/logo.png', height: 25),
            SizedBox(width: 10),
            Text("SE Found"),
          ],
        ),
        content: Text("Model: ${data['modelName']}\nSerial: ${data['serial']}"),
        actions: [
          TextButton(
            onPressed: () {
              controller?.resumeCamera();
              Navigator.pop(context);
            },
            child: Text("OK"),
          )
        ],
      ),
    );
  }

  void _showError(String msg) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    controller?.resumeCamera();
  }
}