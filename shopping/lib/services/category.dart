import 'package:flutter/material.dart';

class Category extends StatefulWidget {
  const Category({super.key});

  @override
  State<Category> createState() => _CategoryState();
}

class _CategoryState extends State<Category> {
  List<String> categories = ["Bags", "Shirts", "Footwear", "Dresses"];

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
