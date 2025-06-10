import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  Menu,
  Palette,
  MapPin,
  Brush,
  PartyPopper,
  CreditCard,
  PenTool,
} from "lucide-react";
import { useMediaQuery } from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsButtonVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    if (newOpen) {
      setIsDropdownOpen({});
    }
  };

  const toggleDropdown = (tab) => {
    setIsDropdownOpen((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const DrawerList = (
    <Box
      className="box"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      }}
    >
      <List>
        <ListItem className="menu-item-dropdown" sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("classes")}
            sx={{ justifyContent: "flex-start" }}
          >
            <Palette className="icon" />
            Art Classes
          </ListItemButton>
          {isDropdownOpen.classes && (
            <List className="items" sx={{ pl: 2 }}>
              <ListItem
                component={Link}
                to="/childrens-art-classes"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Children's Art Classes"
                  style={{ color: "black" }}
                />
              </ListItem>
              <ListItem
                component={Link}
                to="/adult-art-classes"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Adult Art Classes"
                  style={{ color: "black" }}
                />
              </ListItem>
            </List>
          )}
        </ListItem>

        <ListItem className="menu-item-dropdown" sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("locations")}
            sx={{ justifyContent: "flex-start" }}
          >
            <MapPin className="icon" />
            Locations
          </ListItemButton>
          {isDropdownOpen.locations && (
            <List className="items" sx={{ pl: 2 }}>
              <ListItem
                component={Link}
                to="/locations/art-classes-la-mesa"
                onClick={handleCloseDrawer}
              >
                <ListItemText primary="La Mesa" style={{ color: "black" }} />
              </ListItem>
              <ListItem
                component={Link}
                to="/locations/art-classes-santee"
                onClick={handleCloseDrawer}
              >
                <ListItemText primary="Santee" style={{ color: "black" }} />
              </ListItem>
              <ListItem
                component={Link}
                to="/locations/art-classes-bonita"
                onClick={handleCloseDrawer}
              >
                <ListItemText primary="Bonita" style={{ color: "black" }} />
              </ListItem>
            </List>
          )}
        </ListItem>

        <ListItem className="menu-item-dropdown" sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("camps")}
            sx={{ justifyContent: "flex-start" }}
          >
            <Brush className="icon" />
            Summer Art Camps
          </ListItemButton>
          {isDropdownOpen.camps && (
            <List className="items" sx={{ pl: 2 }}>
              <ListItem
                component={Link}
                to="/summer-art-camp"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Summer Art Camp Schedule"
                  style={{ color: "black" }}
                />
              </ListItem>
            </List>
          )}
        </ListItem>

        <ListItem className="menu-item-dropdown" sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("events")}
            sx={{ justifyContent: "flex-start" }}
          >
            <PartyPopper className="icon" />
            Art Parties & Events
          </ListItemButton>
          {isDropdownOpen.events && (
            <List className="items" sx={{ pl: 2 }}>
              <ListItem
                component={Link}
                to="/birthday-art-parties"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Birthday Art Parties"
                  style={{ color: "black" }}
                />
              </ListItem>
              <ListItem
                component={Link}
                to="/paint-parties"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Paint Parties"
                  style={{ color: "black" }}
                />
              </ListItem>
              <ListItem
                component={Link}
                to="/scout-classes"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Boy & Girl Scout Group Classes"
                  style={{ color: "black" }}
                />
              </ListItem>
            </List>
          )}
        </ListItem>

        <ListItem className="menu-item-dropdown" sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("tuition")}
            sx={{ justifyContent: "flex-start" }}
          >
            <CreditCard className="icon" />
            Tuition
          </ListItemButton>
          {isDropdownOpen.tuition && (
            <List className="items" sx={{ pl: 2 }}>
              <ListItem
                component={Link}
                to="/tuition-rates"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Tuition Rates"
                  style={{ color: "black" }}
                />
              </ListItem>
              <ListItem
                component={Link}
                to="/studio-policies"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Studio Policies"
                  style={{ color: "black" }}
                />
              </ListItem>
              <ListItem>
                <a
                  href="https://artwithlarisse.square.site/shop/pay-tuition/2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={handleCloseDrawer}
                >
                  <ListItemText
                    primary="Pay Tuition"
                    style={{ color: "black" }}
                  />
                </a>
              </ListItem>
              <ListItem
                component={Link}
                to="/charter-schools"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Charter School Billing"
                  style={{ color: "black" }}
                />
              </ListItem>
            </List>
          )}
        </ListItem>

        <ListItem className="menu-item-dropdown" sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("about")}
            sx={{ justifyContent: "flex-start" }}
          >
            <PenTool className="icon" />
            About
          </ListItemButton>
          {isDropdownOpen.about && (
            <List className="items" sx={{ pl: 2 }}>
              <ListItem
                component={Link}
                to="/mission"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Mission Statement"
                  style={{ color: "black" }}
                />
              </ListItem>
              <ListItem
                component={Link}
                to="/instructors"
                onClick={handleCloseDrawer}
              >
                <ListItemText
                  primary="Instructors"
                  style={{ color: "black" }}
                />
              </ListItem>
              <ListItem component={Link} to="/faq" onClick={handleCloseDrawer}>
                <ListItemText primary="FAQs" style={{ color: "black" }} />
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
    </Box>
  );

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      {isMobile && isButtonVisible && (
        <Button
          id="Hamburger Icon"
          title="Hamburger Icon"
          onClick={toggleDrawer(true)}
          style={{
            position: "absolute",
            right: 16,
            top: "4%",
            color: "black",
          }}
        >
          <Menu />
        </Button>
      )}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
