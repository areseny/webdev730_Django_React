import ViewProfile from "views/UserProfile/ViewProfile.jsx";
import EditProfile from "views/Editprofiles/EditProfile.jsx";
import NewCasting from "views/Castingrequests/NewCasting.jsx";
import CastingRequest from "views/Castingrequests/CastingRequest.jsx";
import CastingDetail from "views/Castingrequests/CastingDetail.jsx";
import MetricTool from "views/Maps/MetricTool.jsx"
import ChooseClient from "views/Maps/ChooseClient.jsx"
import DanceCombo from "views/Maps/DanceCombo.jsx"
import AddEdit from "views/Maps/AddEdit.jsx"
import AddVideo from "views/Maps/AddVideo.jsx"
import ClientLook from "views/Maps/ClientLook.jsx"
import ClientMainten from "views/Maps/ClientMainten.jsx"
import AddClient from "views/Maps/AddClient.jsx"
import HeadLine from "views/Editprofiles/HeadLine.jsx"

const pageRoutes = [
  {
    path: "/view-profile",
    component: ViewProfile
  },
  {
    path: "/edit-profiles/edit-profile",
    component: EditProfile
  },
  {
    path: "/new-casting",
    component: NewCasting
  },
  {
    path: "/casting-request",
    component: CastingRequest
  },
  {
    path: "/casting-detail",
    component: CastingDetail
  },
  {
    path: "/metric-tool",
    component: MetricTool
  },
  {
    path: "/choose-client",
    component: ChooseClient
  },
  {
    path: "/dance-combo",
    component: DanceCombo
  },
  {
    path: "/add-edit",
    component: AddEdit
  },
  {
    path: "/add-video",
    component: AddVideo
  },
  {
    path: "/client-look",
    component: ClientLook
  },
  {
    path: "/client-mainten",
    component: ClientMainten
  },
  {
    path: "/add-client",
    component: AddClient
  },
  {
    path: "/head-line",
    component: HeadLine
  },
  // {
  //   path: "/view-profile/:id",
  //   component: ViewProfile
  // },
];

export default pageRoutes;
