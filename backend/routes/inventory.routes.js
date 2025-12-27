router.post("/:id/purchase", auth, async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);

  if (sweet.quantity <= 0) {
    return res.status(400).json({ message: "Out of stock" });
  }

  sweet.quantity -= 1;
  await sweet.save();

  res.json(sweet);
});

router.post("/:id/restock", auth, admin, async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);
  sweet.quantity += 1;
  await sweet.save();
  res.json(sweet);
});
